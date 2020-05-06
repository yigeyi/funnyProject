//这个文件演示 控制器和service层分离
const serviceTest = require('../service/v1/serviceTest2.js')

module.exports = {
  //获取数据库数据
  async getTest(ctx){
    let res = await serviceTest.getTest()
    return ctx.output({data:res},'获取成功',0)
  }
}