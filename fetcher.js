const axios = require('axios');
const key = "9SpS_WIoAwdkKEGreyLQH6uphfQpQK0jYdpthze5V2I"
async function fetchQuote() {
  const response = await axios.get('https://api.quotable.io/random');
  return response.data;
}

async function fetchBackgroundImage() {
  const response = await axios.get('https://api.unsplash.com/photos/random', {
    headers: {
      'Authorization': `Client-ID ${key}`
    }
  });
  return response.data.urls.full;
}

module.exports = { fetchQuote, fetchBackgroundImage };
