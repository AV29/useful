/* eslint-disable no-console */
/* eslint-disable import/default */
import webpack from 'webpack';
import config from '../webpack.config.prod';
import * as chalk from './chalkConfig';
import * as constants from './constants';

process.env.NODE_ENV = constants.PRODUCTION; // development configuration (hot reloading) won't apply

console.log(chalk.chalkProcessing('Generating production bundle...'));

const compiler = webpack(config);

compiler.run((err, stats) => {
  if (err) {
    console.log(chalk.chalkError(err));
    return 1;
  }

  const jsonStats = stats.toJson();

  if (jsonStats.hasErrors) {
    return jsonStats.errors.map(error => console.log(chalk.chalkError(error)));
  }

  if (jsonStats.hasWarnings) {
    jsonStats.warnings.map(warning => console.log(chalk.chalkWarning(warning)));
  }

  console.log(`Webpack stats: ${stats}`);
  console.log(chalk.chalkSuccess('Built and written to /dist'));

  return 0;
});
