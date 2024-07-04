const schedule = require('node-schedule');
const { fetchQuote, fetchBackgroundImage } = require('./fetcher');
const { generateImage } = require('./generator');
// const { postToFacebook } = require('./poster');

 const runFunction = async() => {
  try {
    const quoteData = await fetchQuote();
    const backgroundUrl = await fetchBackgroundImage();
    const imagePath = await generateImage(quoteData.content, quoteData.author, backgroundUrl);
     await postToFacebook(imagePath);
  } catch (error) {
    console.error('Error during scheduled job:', error);
  }
};

runFunction()
