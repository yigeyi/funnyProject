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
    let data = {
      tip: '你安装了数据库就可以把上面注释打开'
    }
    return ctx.output({data:data},'获取成功',0)
  },
  async createData(ctx){
    //参数验证
    //通过获取post传递过来的参数
    //再使用模型把数据插入数据库
    const schema = joi.object().keys({
      nick_name: joi.string().required()
    })
    validateParams(ctx.input, schema)
    let nick_name = ctx.input.nick_name
    let parmas = {
      nick_name: nick_name
    }
    let res = await models.test.create(parmas)
    if(res){
      return ctx.output({},'添加成功',0)
    }
    // let data = {
    //   tip: '你安装了数据库就可以把上面注释打开'
    // }
    // return ctx.output({data:data},'获取成功',0)
  }
}