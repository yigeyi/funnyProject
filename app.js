const Koa = require('koa')
const app = new Koa() 
const env = process.env.NODE_ENV;
const config = require('./config')
app.use( async ( ctx ) => {
  ctx.body = '<h2>hello，Koa2</h2>'
})
let port = config.port
app.listen(port,()=>{
  console.log(`运用程序已经在${port}端口运行起来,当前环境为${env}`)
}) 