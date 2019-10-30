const commonPaths = require('./paths');

module.exports = {
  entry: commonPaths.entryPath,
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.less']
  }
};
