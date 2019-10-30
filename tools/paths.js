const path = require('path');
const dist = require('./constants').DIST;

module.exports = {
  root: path.resolve(__dirname, '../'),
  outputPath: path.resolve(__dirname, '../', dist),
  entryPath: path.resolve(__dirname, '../', 'src/index.js'),
  jsFolder: 'js',
  distFolder: dist,
  prodFallbackEntryPoint: `../${dist}/index.html`
};
