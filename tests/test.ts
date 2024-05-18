import { expect, test } from '@playwright/test';

test('svelte-4/getting-started page has expected h1', async ({ page }) => {
  await page.goto('/guide/svelte-4/getting-started');
  await expect(page.locator('h1')).toHaveText('Svelte Flags: v1');
});

test('svelte-4/prop page has expected h1', async ({ page }) => {
  await page.goto('/guide/svelte-4/props');
  await expect(page.locator('h1')).toHaveText('Props: Svelte Flags v1');
});

test('svelte-5/getting-started page has expected h1', async ({ page }) => {
  await page.goto('/guide/svelte-5/getting-started');
  await expect(page.locator('h1')).toHaveText('Svelte Flags: v2');
});

test('svelte-5/prop page has expected h1', async ({ page }) => {
  await page.goto('/guide/svelte-5/props');
  await expect(page.locator('h1')).toHaveText('Props: Svelte Flags v2');
});

test('guide/global-icons page has expected h1', async ({ page }) => {
  await page.goto('/guide/global-icons');
  await expect(page.locator('h1')).toHaveText('Setting Global Icon using setContext');
});

test('guide/custom-icons page has expected h1', async ({ page }) => {
  await page.goto('/guide/custom-icons');
  await expect(page.locator('h1')).toHaveText('Custom Default Icons');
});

test('flags page has expected h1', async ({ page }) => {
  await page.goto('/flags');
  await expect(page.locator('h1')).toHaveText('Flags: Svelte-Flags');
});

