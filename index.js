const urlMetadata = require('url-metadata')
urlMetadata('https://www.shein.in/Men-Colorblock-Striped-Tee-p-525034-cat-1980.html').then(
  function (metadata) { // success handler
    console.log(metadata)
  },
  function (error) { // failure handler
    console.log(error)
  })
