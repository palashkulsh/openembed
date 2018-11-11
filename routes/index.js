/* jslint node: true */
'use strict';

const meta = require('./meta');
const error = require('./error');
const common = require('./common');

module.exports = function (app) {
  app.get('/meta', meta.getmeta,common.response_json, error);
  app.get('/mlmeta', meta.getmlmeta,common.response_json, error);
};
