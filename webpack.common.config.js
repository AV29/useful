const commonPaths = require('./tools/paths');

module.exports = {
  entry: commonPaths.entryPath,
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.less']
  }
};
