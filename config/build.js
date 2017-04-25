/**
 * Created by raphael on 24/04/17.
 */

import webpack from 'webpack';
import webpackConfig from './webpack.config.prod';
import chalk from 'chalk';

const debug = require('debug')('app:build');

process.env.NODE_ENV = 'production';

debug(chalk.blue('Generating minified bundle for production. This will take a moment...'))

webpack(webpackConfig).run((err, stats) => {
  if (err) {
    debug(chalk.red(err));
    return 1;
  }

  const jsonStats = stats.toJson();

  if (jsonStats.hasErrors) {
    return jsonStats.erros.map(error => debug(chalk.red(error)))
  }

  if (jsonStats.hasWarnings) {
    debug(chalk.yellow('Webpack generated the following warnings: '));
    jsonStats.warnings.map(warning => debug(chalk.yellow(warning)));
  }

  debug(`Webpack stats: ${stats}`);

  //if we got this far, the build succeded
  debug(chalk.green('App built to production and written to /dist'));
  return 0;
})
