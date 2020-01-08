const router = require('koa-router')()
let app = require('./v1.js')

//接口映射
router.use('/api/app', app.routes(), app.allowedMethods())

// vue history 设置
// router.get('*', async(ctx, next)=>{
  // return await ctx.render('index', {})
// })

//返回注册路由
module.exports = router