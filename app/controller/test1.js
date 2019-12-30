const models = require('../models')
const {
  joi,
  validateParams
} = require('../base/controller.js')
module.exports = {
  //获取数据库数据
  async getTest(ctx){
    // let res = await models.test.findOne({
    //   where: {
    //     id: 1
    //   }
    // })
    // let data = {
    //   name: res.dataValues.nick_name
    // }
    // return ctx.output({data:data},'获取成功',0)
    let data = {
      tip: '你安装了数据库就可以把上面注释打开'
    }
    return ctx.output({data:data},'获取成功',0)
  }
}