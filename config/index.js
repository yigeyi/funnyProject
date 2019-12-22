let conf = {};
try {
    let env = process.env.NODE_ENV;
    console.log(env);
    if(env === 'development') {
        Object.assign(conf, require('./conf.dev.js'));
    }else if(env == 'test'){
        Object.assign(conf, require('./conf.test.js'));
    }else{
        Object.assign(conf, require("./conf.default.js"));
    }


} catch (e) {
    let msg = '请参照路径 /config/conf.example.js的配置内容，创建 conf.default.js 文件'
    console.error('缺少默认配置文件', msg)
}
module.exports = conf;
