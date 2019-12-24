/*** 第一版业务逻辑路由 */
const router = require('koa-router')()
const test = require('../controller/test')

router.post('/test',test.test)

module.exports = router