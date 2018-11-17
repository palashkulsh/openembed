const urlMetadata = require('url-metatags');

module.exports = {
  getmeta :function(req, res, next){
    urlMetadata(req.query.url).then(
      function (result) { // success handler
        var metadata = JSON.parse(JSON.stringify(result));
        var img = {
          url : metadata.image
        };
        var author = {
          name: metadata.author,
          url: ""
        };
        debugger
        metadata.images = img;
        req.data = metadata
        req.data.images = [img];
        req.data.authors = [author];
        req.data.status='success';
        return next();
      },
      function (error) { // failure handler
        req.data = {};
        req.data.status='failure';
        return next(error);
      });
  },

  getmlmeta :function(req, res, next){
    urlMetadata(req.query.url).then(
      function (result) { // success handler
        var metadata = JSON.parse(JSON.stringify(result));
        var img = {
          url: metadata.image
        };
        var vid = {
          url: metadata.video
        };
        metadata.image = img;
        metadata.video = vid;
        req.data = {};
        req.data.data = metadata;
        req.data.status = 'success';
        return next();
      },
      function (error) { // failure handler
        req.data = {};
        req.data.status='failure';
        return next(error);
      });
  }
}
