/* eslint-disable prefer-template*/
const paths = require('./paths');
const webpack =  require('webpack');
const constants = require('./constants');

module.exports = {
  devtool: 'source-map',
  mode: constants.DEVELOPMENT,
  output: {
    filename: '[name].js',
    path: paths.outputPath,
    chunkFilename: '[name].js'
  },
  devServer: {
    contentBase: paths.outputPath,
    historyApiFallback: true,
    compress: true,
    hot: true,
    port: constants.DEV_PORT
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      noInfo: true,
      debug: true,
      minimize: true
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
      {
        test: /(\.css|\.less)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              localsConvention: 'camelCase',
              modules: {
                localIdentName: '[local]___[hash:base64:5]'
              }
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'less-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  }
};
