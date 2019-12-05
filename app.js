const Koa = require('koa')   //引入koa2
const app = new Koa()   //实例化koa2

app.use( async ( ctx ) => {
	//调用koa2的use方法来创建一个上下文
  ctx.body = '<h2>hello，这是一个在冬天夜里启动的koa2</h2>'
})
app.listen(3000)   //koa运行的端口
console.log('嘿~，小火鸡，koa2已经在3000端口运行起来啦，快去浏览器输入localhost:3000 访问哦~')