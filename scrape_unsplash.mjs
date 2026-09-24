import { chromium } from '@playwright/test';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  const queries = [
    { name: 'kitchen', url: 'https://unsplash.com/s/photos/indian-kitchen' },
    { name: 'cow', url: 'https://unsplash.com/s/photos/cow-india' },
    { name: 'education', url: 'https://unsplash.com/s/photos/indian-school-children' },
    { name: 'charity', url: 'https://unsplash.com/s/photos/charity-hands' },
    { name: 'food', url: 'https://unsplash.com/s/photos/indian-food' }
  ];

  const results = {};

  for (const q of queries) {
    try {
      await page.goto(q.url, { waitUntil: 'domcontentloaded' });
      // wait a bit for images to load
      await page.waitForTimeout(2000);
      
      // Get the first high quality image from the grid
      const imageUrl = await page.evaluate(() => {
        const imgs = Array.from(document.querySelectorAll('img'));
        const photo = imgs.find(img => img.src && img.src.includes('images.unsplash.com/photo-') && !img.src.includes('profile'));
        return photo ? photo.src : null;
      });
      
      if (imageUrl) {
        // clean up the URL to get a specific size and crop
        const baseUrl = imageUrl.split('?')[0];
        results[q.name] = `${baseUrl}?q=80&w=1200&auto=format&fit=crop`;
      } else {
        results[q.name] = null;
      }
    } catch (e) {
      console.error(`Error fetching ${q.name}: ${e.message}`);
    }
  }

  console.log(JSON.stringify(results, null, 2));
  await browser.close();
})();
