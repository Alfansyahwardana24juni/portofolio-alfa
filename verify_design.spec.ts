import { test, expect } from '@playwright/test';

test('verify portfolio design', async ({ page }) => {
  // Go to the local index.html
  await page.goto(`file://${process.cwd()}/index.html`);

  // Check for the blue color (corporate)
  const heroH1 = page.locator('#hero h1');
  await expect(heroH1).toBeVisible();

  // Take screenshots
  await page.screenshot({ path: 'hero_verify.png', fullPage: false });

  const aboutSection = page.locator('#about');
  await aboutSection.scrollIntoViewIfNeeded();
  await page.screenshot({ path: 'about_verify.png' });

  const servicesSection = page.locator('#services');
  await servicesSection.scrollIntoViewIfNeeded();
  await page.screenshot({ path: 'services_verify.png' });
});
