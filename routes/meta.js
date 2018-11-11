const urlMetadata = require('url-metadata');

module.exports = {
  getmeta :function(req, res, next){
    urlMetadata(req.query.url).then(
      function (metadata) { // success handler
        var imgurl = metadata.image;
        metadata.image = {
          url: imgurl
        };
        var videourl = metadata.video;
        metadata.video = {
          url: videourl
        };

        req.data = {
          data:metadata
        };
        req.data.status='success';
        return next();
      },
      function (error) { // failure handler
        req.data = {};
        req.data.status='failure';
        return next(error);
      });
  }
}
