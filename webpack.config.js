// 该插件的作用，自动生成HTML文件，并且嵌入生成的js文件
var htmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = {
  // 入口配置文件
  entry: path.join(__dirname,'main.js'),
  // 输出文件配置
  output: {
    // 文件输出路径
    path: path.join(__dirname,'dist'),
    // 输出文件名称
    filename: 'index.js'
  },
  module: {
    loaders: [
      // 配置所有的加载器
      {
        test : /\.js$/,//处理所有js结尾的文件
        loader: 'babel-loader',
        exclude: path.join(__dirname,'./node_modules'),
        options: {
          'presets': ['latest']
        }
      },
      {
        // 处理css文件，loader顺序从右向左
        test : /\.css$/,//处理所有css结尾的文件
        loader : 'style-loader!css-loader'
      },
      {
        // 处理less文件，依赖less-loader 和 less 包
        test : /\.less$/,
        loader : 'style-loader!css-loader!less-loader'
      },
      {
        // 处理文件资源
        test : /\.(png|jpg|gif|ttf|eot|svg|woff)$/,
        loader : 'url-loader?limit=4096'
      },
      {
        test : /\.vue$/,//处理所有vue结尾的文件
        loader: 'vue-loader'
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      filename: 'index.html', // 内存中生成的文件名称
      template: path.join(__dirname,'index.html') // 模板文件名称
      //使用path.join 拼接
    })
  ]
}