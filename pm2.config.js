let startFile = "./app.js"
module.exports = {
  apps: [{
    name: "prod",
    script: startFile,
    env: {
      "NODE_ENV": "production"
    }
  }, {
    // 测试环境
    name: "test",
    script: startFile,
    env: {
      "NODE_ENV": "test"
    }
  }, {
    // 开发环境
    name: "dev",
    script: startFile,
    env: {
      "NODE_ENV": "development"
    }
  }
  ]
}
