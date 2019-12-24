const conf = {
  port: 3200, //启动端口 
  base_url: '',// 当前api服务器的域名
  mysql: { // mysql数据库信息
    host: 'localhost',
    port: '3306',
    database: 'dev_db',
    user: 'root',
    password: '',
    charset: 'UTF8mb4'
  }
}

module.exports = conf;
