import { expect, test } from '@playwright/test';

test.describe('Vision Board', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display all goals', async ({ page }) => {
    const goalImages = await page.locator('[data-testid^="goal-image-"]');
    const goalDescriptions = await page.locator('[data-testid^="goal-description-"]');
    const goalDates = await page.locator('[data-testid^="goal-date-"]');
    await expect(goalImages).toHaveCount(6);
    await expect(goalDescriptions).toHaveCount(6);
    await expect(goalDates).toHaveCount(6);
  });

  test('should open a modal when clicking on a goal image', async ({ page }) => {
    await page.locator('[data-testid="goal-image-0"]').click();
    const modal = await page.locator('.MuiModal-root');
    await expect(modal).toBeVisible();
  });

  test.skip('should close the modal when clicking on the close button', async ({ page }) => {
    await page.locator('[data-testid="goal-image-0"]').click();
    await page.locator('.MuiIconButton-root > .MuiSvgIcon-root').click();
    const modal = await page.locator('.MuiModal-root');
    await expect(modal).not.toBeVisible();
  });

  test.skip('should navigate through the goals in the modal', async ({ page }) => {
    await page.locator('[data-testid="goal-image-0"]').click();
    const modal = await page.locator('.MuiModal-root');
    await expect(modal).toBeVisible();

    // Check next button
    await page.locator('.MuiIconButton-label > .MuiSvgIcon-root').nth(1).click();
    const nextImage = await page.locator('.MuiModal-root img');
    await expect(nextImage).toHaveAttribute('alt', 'Goal 2');

    // Check back button
    await page.locator('.MuiIconButton-label > .MuiSvgIcon-root').nth(0).click();
    const previousImage = await page.locator('.MuiModal-root img');
    await expect(previousImage).toHaveAttribute('alt', 'Goal 1');
  });
});
