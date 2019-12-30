const conf = {
  port: 3200, //启动端口 ，这个根据你电脑环境的实际情况来配置
  base_url: '',// 当前api服务器的域名
  mysql: { // mysql数据库信息
    host: 'localhost',
    port: '3306',
    database: 'dev_db',  //你可以修改你的数据库名字
    user: 'root',  //数据库登录账户 你寄己来
    password: '', //数据库登录密码 我就不知道你的是啥啦
    charset: 'UTF8mb4'
  }
}

module.exports = conf;
