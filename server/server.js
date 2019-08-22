const express = require('express');
const app = express();
const port = 3500;
const Flickr = require('flickr-sdk');
const fetch = require('node-fetch');

const nsid = '181790731@N03';
const photosetId = '72157710456920277';
const key = '76880e8b9d439cdc90fe7775bffd4343';

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', process.env.CORS_ALLOWED);
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT');
  next();
})

app.get('/photos', (request, response) => {
  const flickr = new Flickr(key);

  // flickr.photosets.getList()
  //   .then(data => console.log);

  fetch(`https://www.flickr.com/services/rest/?method=${'flickr.photosets.getPhotos'}&api_key=${key}&photoset_id=${photosetId}&user_id=${nsid}&format=json&nojsoncallback=1`)
    .then(response => response.json())
    .then(data => {
      const urls = data.photoset.photo.map(item => {
        return `https://farm${item.farm}.staticflickr.com/${item.server}/${item.id}_${item.secret}_b.jpg`
      });

      return response.json({
        photos: urls
      });
    })
});

app.listen(port, () => console.log(process.env.CORS_ALLOWED));