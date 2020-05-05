const log4js = require("log4js");
log4js.configure({
    appenders: {
        "console": {
            "type": "console"
        },

        //系统日志
        "app": {
            "type": 'dateFile',
            "filename": 'logs/app',                    //您要写入日志文件的路径
            "pattern": '-yyyy-MM-dd.log',        //用于确定何时滚动日志的模式
            //compress : true,                      //（默认为false） - 在滚动期间压缩备份文件（备份文件将具有.gz扩展名）
            "maxLogSize": 20971520,                 //(20M) 文件最大存储空间，当文件内容超过文件存储空间会自动生成一个文件test.log.1的序列自增长的文件
            "alwaysIncludePattern": true            //（默认为false） - 将模式包含在当前日志文件的名称以及备份中
        },

        //请求日志
        "access": {
            "type": "dateFile",
            "filename": 'logs/access',
            "pattern": '-yyyy-MM-dd.log',
            "maxLogSize": 20971520,
            "alwaysIncludePattern": true
        },

        //错误日志
        "error": {
            "type": "dateFile",
            "filename": 'logs/error',
            "pattern": '-yyyy-MM-dd.log',
            "maxLogSize": 20971520,
            "alwaysIncludePattern": true
        }
    },
    categories: {
        "default": { "appenders": ["console", "app"], "level": "all" },
        "error": { "appenders": ["error"], "level": "all" },
        "access": { "appenders": ["console", "access"], "level": "all" }
    },

    pm2: true,      //若 app 使用了 pm2，则这里必须设置为true
    disableClustering: true
});

module.exports = log4js;