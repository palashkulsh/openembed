const urlMetadata = require('url-metadata');

module.exports = {
  getmeta :function(req, res, next){
    urlMetadata(req.query.url).then(
      function (metadata) { // success handler
        req.data = metadata;
        return next();
      },
      function (error) { // failure handler
        return next(error);
      });
  }
}
