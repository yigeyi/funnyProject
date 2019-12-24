const models = require('../../models')

module.exports = {
  async test(ctx){
    // console.log('res', ctx.input.name)
    let res = await models.test.findOne({
      where: {
        id: 1
      }
    })
    let data = {
      name: res.dataValues.nick_name
    }
    return ctx.output({data:data},'获取成功',0)
  }
}