/* eslint-disable prefer-template*/
import { PRODUCTION } from './tools/constants';

const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const GLOBALS = {
  'process.env.NODE_ENV': JSON.stringify(PRODUCTION)
};

module.exports = {
  devtool: 'source-map',
  entry: './src/index',
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  target: 'web',
  mode: PRODUCTION,
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new webpack.DefinePlugin(GLOBALS),
    new ExtractTextPlugin({ filename: 'styles.css', disable: false, allChunks: true }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new HtmlWebpackPlugin({
      inject: true,
      filename: 'index.html',
      favicon: './src/assets/favicon.ico',
      template: './tools/prod.html'
    }),
    new CopyWebpackPlugin([
      {
        from: './locales',
        to: __dirname + '/dist/locales'
      },
      {
        from: './netlify',
        to: __dirname + '/dist/'
      }
    ])
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.less']
  },
  module: {
    rules: [
      {
        test: /(\.js$|\.jsx?$)/,
        loader: 'babel-loader',
        exclude: [/node_modules/, /docs/],
        options: {
          sourceMap: true
        }
      },
      {
        test: /(\.css|\.less)$/,
        exclude: [/docs/],
        loader: ExtractTextPlugin.extract(
          Object.assign({
            fallback: {
              loader: 'style-loader',
              options: {
                hmr: false
              }
            },
            use: [
              {
                loader: 'css-loader',
                options: {
                  importLoaders: 1,
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
                  sourceMap: true,
                  ident: 'postcss',
                  config: {
                    path: 'postcss.config.js'
                  }
                }
              },
              {
                loader: 'less-loader',
                options: {
                  sourceMap: true
                }
              }
            ]
          })
        )
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        loader: 'file-loader'
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.(ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader'
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'babel-loader'
          },
          {
            loader: 'react-svg-loader',
            query: {
              svgo: {
                plugins: [{ removeTitle: false }],
                floatPrecision: 2
              }
            }
          }
        ]
      }
    ]
  }
};

