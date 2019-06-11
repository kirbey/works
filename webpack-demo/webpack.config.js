var htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './src/app.js',
  output: {
    path: __dirname + '/dist',
    filename: 'js/[name].js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      //以下目录不处理
      exclude: /node_modules/,
      //只处理以下目录
      include: /src/,
      loader: "babel-loader",
      //配置的目标运行环境（environment）自动启用需要的 babel 插件
      query: {
        presets: ['latest']
      }
    }

    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      template: 'index.html',
      filename: 'index.html'
    })
  ]
}