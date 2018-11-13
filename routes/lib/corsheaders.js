"use strict";

var allowedHosts = ['https://*.blogspot.com','http://*.blogspot.com'];
module.exports = function(req, res, next) {
        res.header('Access-Control-Allow-Origin', req.headers.origin);
        res.header('Access-Control-Allow-Credentials', true);
        res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT');
        res.header('Access-Control-Allow-Headers', 'Content-Type');
        res.header('Access-Control-Expose-Headers', 'Content-Disposition');
        if (req.method === 'OPTIONS') {
            return res.send(204);
        }
    next();
};
