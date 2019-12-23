const Sequelize = require('sequelize')
const path = require('path')
const fs = require('fs')
const conf_mysql = require('../../config').mysql
const Op = Sequelize.Op;
const operatorsAliases = {
  $eq: Op.eq,
  $ne: Op.ne,
  $gte: Op.gte,
  $gt: Op.gt,
  $lte: Op.lte,
  $lt: Op.lt,
  $not: Op.not,
  $in: Op.in,
  $notIn: Op.notIn,
  $is: Op.is,
  $like: Op.like,
  $notLike: Op.notLike,
  $iLike: Op.iLike,
  $notILike: Op.notILike,
  $regexp: Op.regexp,
  $notRegexp: Op.notRegexp,
  $iRegexp: Op.iRegexp,
  $notIRegexp: Op.notIRegexp,
  $between: Op.between,
  $notBetween: Op.notBetween,
  $overlap: Op.overlap,
  $contains: Op.contains,
  $contained: Op.contained,
  $adjacent: Op.adjacent,
  $strictLeft: Op.strictLeft,
  $strictRight: Op.strictRight,
  $noExtendRight: Op.noExtendRight,
  $noExtendLeft: Op.noExtendLeft,
  $and: Op.and,
  $or: Op.or,
  $any: Op.any,
  $all: Op.all,
  $values: Op.values,
  $col: Op.col
};  
const sequelize = new Sequelize(
    conf_mysql.database,
    conf_mysql.user,
    conf_mysql.password,
    {
        host: conf_mysql.host,
        port: conf_mysql.port,
        dialect: 'mysql',
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        },
        define: {
            underscored: true,// 字段以下划线（_）来分割（默认是驼峰命名风格）
            freezeTableName: true,
            timestamps: false,//时间戳，启用该配置后会自动添加createdAt、updatedAt两个字段，分别表示创建和更新时间
            paranoid: false // 虚拟删除。启用该配置后，数据不会真实删除，而是添加一个deletedAt属性
        },
        operatorsAliases: true,
        timezone: '+08:00',     //  设置时区为北京时间东八区
        logging: function (sql) {
            console.log(sql)
        }
    }
)

/**
 * 遍历 ./sequelize-model 模型目录下的所有文件
 */
const directoryPath = path.join(__dirname, './sequelize-model')
const files = fs.readdirSync(directoryPath)
const models = {}
for (let i = 0, len = files.length; i < len; i++) {
    let file = path.basename(files[i],'.js')
    models[file] = sequelize.import(file, require('./sequelize-model/' + file))
}

module.exports = models;
