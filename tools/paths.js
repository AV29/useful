const path = require('path');
const dist = require('./constants').DIST;

module.exports = {
  root: path.resolve(__dirname, '../'),
  outputPath: path.resolve(__dirname, '../', dist),
  entryPath: path.resolve(__dirname, '../', 'src/index.js'),
  jsFolder: 'js',
  templatePath: path.resolve(__dirname, '../', 'src/index.html'),
  faviconPath: path.resolve(__dirname, '../', 'src/assets/favicon.ico'),
  localesPath: path.resolve(__dirname, '../', 'locales'),
  netlifyPath: path.resolve(__dirname, '../', 'netlify'),
  distFolder: dist,
  prodFallbackEntryPoint: `../${dist}/index.html`
};
