const { defineConfig } = require('@vue/cli-service')
const path = require('path')
module.exports = defineConfig({
  chainWebpack: (config) => {
    config.plugin('define').tap((definitions) => {
      Object.assign(definitions[0], {
        __VUE_OPTIONS_API__: 'true',
        __VUE_PROD_DEVTOOLS__: 'false',
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'false'
      })
      return definitions
    })
  },
  devServer: {
    port: 8900,
    open: true,
    hot: true,
    historyApiFallback: true, // 添加这一行配置
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:3001',
        ws: true,
        pathRewrite: {
          '^/api': '/'
        }
      }
    },
  

  },
  transpileDependencies: true,
  lintOnSave: false,
  // 添加路由配置
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    },
  },
})
