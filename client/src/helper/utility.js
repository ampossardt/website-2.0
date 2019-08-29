export const getHashChange = (event) => {
  const hash = event.newURL.substring(event.newURL.lastIndexOf('/') + 1);
  const query = hash.indexOf('?') > -1 && hash.split('?')[1].split('=');

  return new Promise((resolve, reject) => {
    resolve({ hash: hash.split('?')[0].replace('#', ''), query });
  });
}