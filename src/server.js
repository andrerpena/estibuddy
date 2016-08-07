import fs from 'fs';
import React from 'react';
import express from 'express';
import webpackConfig from '../webpack/webpack.config.dev';
import colors from 'colors';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpack from 'webpack';

const webpackCompiler = webpack(webpackConfig);

require.extensions['.html'] = function (module, filename) {
    module.exports = fs.readFileSync(filename, 'utf8');
};

let app = express();

app.use(webpackMiddleware(webpackCompiler));
app.use(webpackHotMiddleware(webpackCompiler));
app.use(function renderApp(req, res) {
    let wrap = require('./pages/index.html')
        .replace(/\$\{cssBundlePath\}/g, '')
        .replace(/\$\{jsBundlePath\}/g, '/bundle.js');

    res.status(200).send(wrap);
});

app.listen(4000, '0.0.0.0', function () {
    console.log(colors.green(`Redux-autoform started at http://localhost:4000/. NODE_ENV: ${process.env.NODE_ENV}`));
});
