/**
 * 请求参数转换
 */
async function input(ctx) {
	let data = {};
	switch (ctx.method) {
		case 'GET':
			Object.assign(data, ctx.request.query)
			break;
		case 'PUT':
			break;
		case 'POST':
			Object.assign(data, ctx.request.body)
			break;
	}
	ctx.input = data;
}

/**
 * 返回数据方法
 */
async function output(ctx) {
	/**
	 * @param {*} data 
	 * @param {*} msg 
	 * @param {*} code 
	 */
	let a = function (data, msg = "", code = 0) {
		let json = {};
		json.code = code;
		json.data = data != undefined ? data : {};
		json.msg = msg;
		ctx.body = JSON.stringify(json);
	}
	ctx.output = a;
}

async function monit(ctx, next) {
	let logger = require('../libs/log4js').getLogger('access');
	let req = ctx.request;
	let res = ctx.response;
	let beginTime = new Date().getTime();

	let fields = {
		method: req.method,
		status: 200,
		url: req.url,
		total_time: '0ms',
		accept: req.header['accept'],
		ua: req.header['user-agent'],
		input: ctx.input,
		output: ''
	};
	try {
		await next(); //执行下一步
		let endTime = new Date().getTime();
		fields.total_time = endTime - beginTime + 'ms';
		fields.output = ctx.body;
		fields.status = ctx.status;
		//记录日志
		if (ctx.status === 404) {
			logger.warn(JSON.stringify(fields));
		} else {
			logger.info(JSON.stringify(fields));
		}

	} catch (error) {
		let loggerError = require('log4js').getLogger('error');
		let endTime = new Date().getTime();
		fields.total_time = endTime - beginTime + 'ms';
		if (error instanceof Error) {
			if (error.errno != undefined || typeof error.code === 'string') {
				fields.error = error;
				ctx.output({}, "系统内部错误", 500); //返回系统调用错误输出
				fields.output = ctx.body;
				fields.status = 500;
				logger.error(JSON.stringify(fields)); //记录请求日志
				loggerError.fatal(error);
			} else {
				fields.errorMsg = error.message;
				ctx.output({}, error.message, error.code); //返回系统调用错误输出
				fields.output = ctx.body;
				fields.status = 200;
				logger.warn(JSON.stringify(fields)); //记录请求日志
			}
		}


	} finally {}
}

/**
 * 监控请求中间件
 */
module.exports = async function (ctx, next) {
	await input(ctx);
	await output(ctx);
	await monit(ctx, next);
}