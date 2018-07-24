'use strict'
const path = require('path')
const utils = require('./utils')
const config = require('../config')
const vueLoaderConfig = require('./vue-loader.conf')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}
let BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    plugins: [new BundleAnalyzerPlugin()]
}
new BundleAnalyzerPlugin({
    //  可以是`server`，`static`或`disabled`。
    //  在`server`模式下，分析器将启动HTTP服务器来显示软件包报告。
    //  在“静态”模式下，会生成带有报告的单个HTML文件。
    //  在`disabled`模式下，你可以使用这个插件来将`generateStatsFile`设置为`true`来生成Webpack Stats JSON文件。
    analyzerMode: 'server',
    //  将在“服务器”模式下使用的主机启动HTTP服务器。
    analyzerHost: '127.0.0.1',
    //  将在“服务器”模式下使用的端口启动HTTP服务器。
    analyzerPort: 8888, 
    //  路径捆绑，将在`static`模式下生成的报告文件。
    //  相对于捆绑输出目录。
    reportFilename: 'report.html',
    //  模块大小默认显示在报告中。
    //  应该是`stat`，`parsed`或者`gzip`中的一个。
    //  有关更多信息，请参见“定义”一节。
    defaultSizes: 'parsed',
    //  在默认浏览器中自动打开报告
    openAnalyzer: true,
    //  如果为true，则Webpack Stats JSON文件将在bundle输出目录中生成
    generateStatsFile: false, 
    //  如果`generateStatsFile`为`true`，将会生成Webpack Stats JSON文件的名字。
    //  相对于捆绑输出目录。
    statsFilename: 'stats.json',
    //  stats.toJson（）方法的选项。
    //  例如，您可以使用`source：false`选项排除统计文件中模块的来源。
    //  在这里查看更多选项：https：  //github.com/webpack/webpack/blob/webpack-1/lib/Stats.js#L21
    statsOptions: null,
    logLevel: 'info' //日志级别。可以是'信息'，'警告'，'错误'或'沉默'。
  })
// const createLintingRule = () => ({
//   test: /\.(js|vue)$/,
//   loader: 'eslint-loader',
//   enforce: 'pre',
//   include: [resolve('src'), resolve('test')],
//   options: {
//     formatter: require('eslint-friendly-formatter'),
//     emitWarning: !config.dev.showEslintErrorsInOverlay
//   }
// })

module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: {
    app: './src/main.js'
  },
  externals: {  
  'echarts': 'echarts',  
  
 },  
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
    }
  },
  module: {
    rules: [
      // ...(config.dev.useEslint ? [createLintingRule()] : []),
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
          test: /\\\\\\\\.css$/,
          loader: "style!css"
      },
      {
          test: /\\\\\\\\.(eot|woff|woff2|ttf)([\\\\\\\\?]?.*)$/,
          loader: "file"
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')]        
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  node: {
    // prevent webpack from injecting useless setImmediate polyfill because Vue
    // source contains it (although only uses it if it's native).
    setImmediate: false,
    // prevent webpack from injecting mocks to Node native modules
    // that does not make sense for the client
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  }
}
