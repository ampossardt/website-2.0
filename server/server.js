const express = require('express');
const app = express();
const port = 3500;
const Flickr = require('flickr-sdk');
const fetch = require('node-fetch');

const nsid = '81790731@N03';
const photosetId = '72157710456920277';
const key = '76880e8b9d439cdc90fe7775bffd4343';

app.get('/', (request, response) => {
  const flickr = new Flickr(key);

  // flickr.photosets.getList()
  //   .then(data => console.log);

  fetch(`https://www.flickr.com/services/rest/?method=${'flickr.people.findByUsername'}&name=${value}`)

  // flickr.photosets.getPhotos({
  //   photoset_id: photosetId,
  //   user_id: nsid
  // }).then(data => {
  //   console.log(data)
  // }).catch(error => console.error);

  response.sendStatus(200);
});

app.listen(port, () => console.log('started'));