const router = require('koa-router')()

//前台路由
let app = require('./v1.js')
router.use('/api/app', app.routes(), app.allowedMethods())

//后台cms路由
// let cms = new Router()
// router.use('/api/cms', cms.routes(), cms.allowedMethods())

//vue history 设置
// router.get('*', async(ctx, next)=>{
//   return await ctx.render('index', {})
// })

//返回注册路由
module.exports = router