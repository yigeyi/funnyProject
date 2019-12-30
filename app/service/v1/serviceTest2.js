const models = require('../../models')

module.exports = {
  //获取数据库数据
  async getTest(ctx){
    let res = await models.test.findOne({
      where: {
        id: 1
      }
    })
    let data = {
      name: res.dataValues.nick_name
    }
    // let data = {
    //   tip: '这里从控制器抽离出来的操作数据库的东西，你如果安装了mysql，可以打开上面的注释'
    // }
    return data
  }
}