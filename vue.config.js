module.exports = {
  devServer: {
    disableHostCheck: true,
  },
  publicPath: '/aeflorezm/',
  configureWebpack: {
    resolve: {
      symlinks: false,
    },
  },

  transpileDependencies: ['vuetify'],
}
