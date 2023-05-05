import { axeCheck } from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

test.describe('Vision Board Accessibility', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should have no accessibility violations', async ({ page }) => {
    const { violations } = await axeCheck(page);
    expect(violations.length).toBe(0);
  });
});
