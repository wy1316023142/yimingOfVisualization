const path = require('path');
const webpack = require('webpack')

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/' : './',
    outputDir: 'dist',
    // assetsDir: "static",
    productionSourceMap: false,
    // css相关配置
    css: {
        // 是否使用css分离插件 ExtractTextPlugin
        extract: false,
        // 开启 CSS source maps?
        sourceMap: true,
        // css预设器配置项
        loaderOptions: {},
        // 启用 CSS modules for all css / pre-processor files.
        modules: false
    },
    devServer: {
        host: 'localhost',
        port: 8075,
        open: true, //配置自动启动浏览器
        https: false,
        hotOnly: true,
        before: app => {}
    },
    //公共代码抽离
    configureWebpack: () => ({
        optimization: {
          splitChunks: {
            cacheGroups: {
              vendor:{
                chunks:"all",
                    test: /node_modules/,
                    name:"vendor",
                    minChunks: 1,
                    maxInitialRequests: 5,
                    minSize: 0,
                    priority:100,
              },
              common: {
                chunks:"all",
                test:/[\\/]src[\\/]js[\\/]/,
                name: "common",
                minChunks: 2,
                maxInitialRequests: 5,
                minSize: 0,
                priority:60
              },
              styles: {
                name: 'styles',
                test: /\.(sa|sc|c)ss$/,
                chunks: 'all',
                enforce: true,
              },
              runtimeChunk: {
                name: 'manifest'
              }
            }
          }
        }
      }),

}
