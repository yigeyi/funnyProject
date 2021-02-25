const path = require("path")
const resolve = dir => path.join(__dirname, dir)
//const env = process.env.NODE_ENV
const assetsDir = ''
const productionSourceMap = false
const filenameHashing = true
function getAssetPath (assetsDir, filePath) {
  return assetsDir ?
    path.posix.join(assetsDir, filePath) :
    filePath
}
console.log('process.env.NODE_ENV', process.env.NODE_ENV)
module.exports = {
  publicPath: './',
  outputDir: process.env.outputDir,
  lintOnSave: false,
  productionSourceMap: false,
  filenameHashing: false,
  chainWebpack: config => {
    config
      .entry('home.vue')
      .add('babel-polyfill')
      .end()

    config.resolve.alias
    //.set("@", resolve("src"))
    //.set("@views", resolve("src/views"))
    //.set("@config", resolve("src/config"))
    //.set("@utils", resolve("src/utils/"))
    .set("@http", resolve("src/http"))
    //.set("@api", resolve("src/http/api"))
    //.set("@mixin", resolve("src/mixin"))
    //.set("@components", resolve("src/components"))
    //.set("@images", resolve("src/assets/images"))
    //.set("@svg", resolve("src/assets/svg"))
    //.set("@css", resolve("src/style"))
    if (process.env.NODE_ENV === 'test') {
      const isLegacyBundle = process.env.VUE_CLI_MODERN_MODE && !process.env.VUE_CLI_MODERN_BUILD
      const filename = getAssetPath(
        assetsDir,
        `js/[name]${isLegacyBundle ? `-legacy` : ``}${filenameHashing ? '.[contenthash:8]' : ''}.js`
      )
      config.mode('production').devtool(productionSourceMap ? 'source-map' : false).output.filename(filename).chunkFilename(filename)
    }
  },
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: true,
    // 开启 CSS source maps?
    sourceMap: false,
    // css预设器配置项
    loaderOptions: {
      // pass options to sass-loader
    },
    // 启用 CSS modules for all css / pre-processor files.
    requireModuleExtension: false,
  },
  devServer: {
    port: 8091,
    proxy: {
      '/api': {
        //target: 'http://csair-social-media.test',
        target: 'http://localhost:3200',
        changeOrigin: true
      }
    },
    disableHostCheck: true
  }
}
