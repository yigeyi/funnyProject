const Koa = require('koa')
const app = new Koa() 
const env = process.env.NODE_ENV;
const config = require('./config')
const router = require('./app/router')

/**
 * 报文中间件
 */
const bodyBody = require('koa-body')
const xmlParser = require('koa-xml-body')
app.use(xmlParser())
app.use(
  bodyBody({
    multipart: true, // 支持文件上传  
    encoding: 'utf-8',
    formidable: {
      maxFieldsSize: 10 * 1024 * 1024, // 文件上传大小
      onFileBegin: (name, file) => {
        // 文件上传前的设置  
        // console.log(`name: ${name}`);
        // console.log(file);
      }
    }
  })
)

/**
 * 自定义中间件
 */
app.use(require('./middleware/request'))
/**
 * 注册路由
 */
app.use(router.routes()).use(router.allowedMethods())
let port = config.port
app.listen(port,()=>{
  console.log(`运用程序已经在${port}端口运行起来,当前环境为${env}`)
}) 

app.use( async ( ctx ) => {
  ctx.body = '<h2>hello，Koa2</h2>'
})