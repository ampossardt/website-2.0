const dev = {
  apiUrl: 'http://localhost:3500'
}

const prod = {
  apiUrl: 'https://ap-website-server.herokuapp.com'
}

export const config = process.env.NODE_ENV === 'production' ? prod : dev;

console.log(process.env.NODE_ENV);