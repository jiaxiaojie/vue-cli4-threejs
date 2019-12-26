const path = require('path')

module.exports = {
  publicPath:'./',
  outputDir:'dist',
  runtimeCompiler: true,
  lintOnSave:false,
  devServer:{
    open:true,
    watchContentBase: true,
    contentBase: __dirname + '/src',
    proxy:{
      '/api':{
        target: 'http://192.168.88.98:8089',//test
        changeOrigin: true,
        secure: false
      }
    }
  }
}