const puppeteer = require('puppeteer');
const fs = require('fs');

async function generateImage(quote, author, backgroundUrl) {
  const template = fs.readFileSync('template.html', 'utf-8');
  const html = template
    .replace('{{quote}}', quote)
    .replace('{{author}}', author)
    .replace('{{backgroundUrl}}', backgroundUrl);

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setContent(html, { waitUntil: 'networkidle0' });
  await page.setViewport({ width: 1080, height: 1080 });
  await page.screenshot({ path: 'quote.png', fullPage: true });

  await browser.close();
  return 'quote.png';
}

module.exports = { generateImage };
