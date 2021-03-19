/*
 * @Descripttion: 
 * @Author: taoman
 * @Date: 2020-12-16 13:24:05
 * @LastEditors: taoman
 * @LastEditTime: 2021-03-18 16:56:10
 */
const CompressionWebpackPlugin = require("compression-webpack-plugin")
module.exports = {
  chainWebpack: config => {
    // 生产环境，开启js\css压缩
    if (process.env.NODE_ENV === "production") {
      config.plugin("compressionPlugin").use(
        new CompressionWebpackPlugin({
          algorithm:'gzip',
          test: /\.(js|css|less)$/, // 匹配文件名
          threshold: 10240, // 对超过10k的数据压缩
          minRatio: 0.8,
          deleteOriginalAssets: true // 删除源文件
        })
      );
    }
  },
    runtimeCompiler: true,
    productionSourceMap:false,
    css:{
      loaderOptions:{
        less:{
          globalVars:{
            "screen-sm-min":"768px",
            "screen-md-min":"992px",
            "screen-lg-min":"1200px",
            "color-cyan":"#50616d",
            "color-gray":"rgb(136,136,136)",
            "font-color":"#fafafa",
            "menu-item-color":"#010101",
            "selection-color":" #f17c67fc",
            "color-title":"#888",
            "color-content":"#101010"
          }
        }
      }
    }
  }