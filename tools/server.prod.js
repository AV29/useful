/* eslint-disable import/default */
/* eslint-disable no-console */
import express from 'express';
import path from 'path';
import compression from 'compression';

const constants = require('./constants');
const paths = require('./paths');

const app = express();

app.use(compression());
app.use(express.static(paths.distFolder));

// Everything else will return the index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, paths.prodFallbackEntryPoint));
});

app.listen(constants.PROD_BUILD_PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Prod is served on port ${constants.PROD_BUILD_PORT}`);
  }
});
