const webpackMerge = require('webpack-merge');
const common = require('./webpack.common.config.js');

const envs = {
  development: 'dev',
  production: 'prod',
};
/* eslint-disable global-require,import/no-dynamic-require */
const env = envs[process.env.NODE_ENV || 'development'];
const envConfig = require(`./webpack.config.${env}.js`);
module.exports = webpackMerge(common, envConfig);
