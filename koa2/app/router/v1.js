//业务接口

const router = require('koa-router')()
// 引入不同控制器接口文件
// 根据不同的业务模块我们可以创建不同的controller，我们可以把相同模块的接口写在相同的controller中，并通过此处进行引入，例如 test1
const test = require('../controller/test')
const test1 = require('../controller/test1') 
const test2 = require('../controller/test2') 
const upload = require('../controller/upload') 


//接口映射
//接口访问地址http://localhost:port/api/app/test
///api/app这一段已经在index.js中配置了前缀，所以在写接口的时候需要加上api/app/
//controller
router.post('/test',test.getTest)
router.post('/createData',test.createData)

//controller1
router.post('/test1',test1.getTest)

//controller和service分离部分
router.post('/test2',test2.getTest)

//upload
router.post('/upload',upload.upload )

module.exports = router
