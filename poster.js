const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');
require('dotenv').config();

async function postToFacebook(imagePath) {
  const formData = new FormData();
  formData.append('source', fs.createReadStream(imagePath));

  const response = await axios.post(
    `https://graph.facebook.com/v11.0/${process.env.FACEBOOK_PAGE_ID}/photos`,
    formData,
    {
      params: {
        access_token: process.env.FACEBOOK_PAGE_ACCESS_TOKEN,
      },
      headers: {
        ...formData.getHeaders(),
      },
    }
  );

  console.log('Posted to Facebook:', response.data);
}

module.exports = { postToFacebook };
