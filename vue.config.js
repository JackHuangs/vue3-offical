module.exports = {
  // 设置打包文件相对路径
  publicPath: "./",
  devServer: {
    open: true,
    disableHostCheck: true
  },
  // 不同环境不同打包
  chainWebpack: config => {
    // 移除prefetch插件
    config.plugins.delete('prefetch')
    // 生产环境
    config.when(process.env.NODE_ENV === 'production', config => {
      config.entry('app').clear().add('./src/main-prod.ts')
      // 使用CDN获取第三方依赖
      config.set('externals', {
        vue: 'Vue',
        'element-plus': 'ElementPlus',
        'animate': 'animate'
      })
    })
    // 开发环境
    config.when(process.env.NODE_ENV === 'development', config => {
      config.entry('app').clear().add('./src/main-dev.ts')
    })
  }
}
