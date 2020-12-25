/*
 * @Descripttion: 
 * @Author: taoman
 * @Date: 2020-12-16 13:24:05
 * @LastEditors: taoman
 * @LastEditTime: 2020-12-24 15:31:51
 */

module.exports = {
    runtimeCompiler: true,
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