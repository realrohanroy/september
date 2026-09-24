import { chromium } from '@playwright/test';
import fs from 'fs';

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  const urlMap = {
    'home': 'http://localhost:3000',
    'give': 'http://localhost:3000/give',
    'causes': 'http://localhost:3000/causes',
    'your-date': 'http://localhost:3000/your-date',
    'field-notes': 'http://localhost:3000/field-notes',
    'who': 'http://localhost:3000/who'
  };

  const sizes = [
    { width: 390, height: 844, name: '390px' },
    { width: 768, height: 1024, name: '768px' },
    { width: 1440, height: 900, name: '1440px' }
  ];

  for (const [route, url] of Object.entries(urlMap)) {
    for (const size of sizes) {
      await page.setViewportSize({ width: size.width, height: size.height });
      await page.goto(url, { waitUntil: 'networkidle' });
      await page.waitForTimeout(1000);
      
      const fileName = `screenshot_${route}_${size.name}.png`;
      await page.screenshot({ path: fileName, fullPage: true });
      console.log(`Saved ${fileName}`);
    }
  }

  await browser.close();
})();
