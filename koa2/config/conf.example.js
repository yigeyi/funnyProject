const conf = {
  port: 80, //启动端口
  base_url: '',// 当前api服务器的域名
  mysql: { // mysql数据库信息
    host: 'localhost',
    port: '3306',
    database: 'example_db',
    user: 'root',
    password: 'root',
    charset: 'UTF8'
  }
}

module.exports = conf;
