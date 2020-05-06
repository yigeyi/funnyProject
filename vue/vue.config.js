const path = require("path")
const resolve = dir => path.join(__dirname, dir)

module.exports = {
  publicPath: '/',
  productionSourceMap: false,
  pluginOptions: {
    'style-resources-loader' : {
      preProcessor: 'scss', 
      patterns: [
        path.resolve(__dirname,"./src/assets/style/reset.scss")
      ]
    }
  },

  chainWebpack: config => {
    config
      .entry('home.vue')
      .add('babel-polyfill')
      .end() 

    config.resolve.alias
    //   .set("@", resolve("src"))
    //   .set("@views", resolve("src/views"))
    //   .set("@config", resolve("src/config"))
    //   .set("@utils", resolve("src/utils/"))
    //   .set("@http", resolve("src/http"))
    //   .set("@api", resolve("src/http/api"))
    //   .set("@mixin", resolve("src/mixin"))
    //   .set("@components", resolve("src/components"))
      .set("@style", resolve("src/assets/style"))
    //   .set("@svg", resolve("src/assets/svg"))
  },
  lintOnSave: false,
  // devServer: {
  //   port: 8091,
  //   proxy: {
  //     '/api': {
  //       target: '',
  //       changeOrigin: true
  //     }
  //   },
  //   disableHostCheck: true
  // }
}
