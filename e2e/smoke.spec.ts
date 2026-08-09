import { expect, test } from '@playwright/test';

/**
 * Smoke tests: does each page actually render against the built static export?
 *
 * These deliberately assert on visible content rather than markup details, so
 * they survive styling changes and only fail when a page is genuinely broken.
 */

test.describe('smoke', () => {
  test('the home page renders', async ({ page }) => {
    await page.goto('/');

    await expect(
      page.getByRole('paragraph').filter({ hasText: 'Marc Goossens' })
    ).toBeVisible();
    await expect(page.getByAltText('Picture of the author')).toBeVisible();

    // chrome that every page shares
    await expect(page.getByRole('link', { name: 'Blog' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'GitHub' })).toHaveAttribute(
      'href',
      'https://github.com/m-goos'
    );
  });

  test('the blog index lists posts and a post renders', async ({ page }) => {
    await page.goto('/blog');
    await expect(
      page.getByRole('heading', { name: 'Latest blogs' })
    ).toBeVisible();

    const posts = page.locator('a[href^="blog/"]');
    expect(await posts.count()).toBeGreaterThan(0);

    // follow the first card rather than hardcoding a slug, so this also covers
    // the index -> post link wiring
    await posts.first().click();
    await expect(page).toHaveURL(/\/blog\/.+/);

    // the post's own H1 is authored in the MDX body and does not always match
    // the frontmatter title used on the card, so only assert that one exists
    await expect(
      page.getByRole('article').getByRole('heading', { level: 1 })
    ).toBeVisible();
    // posts render as prose, so there should be body copy under the title
    await expect(page.locator('article p').first()).toBeVisible();
  });

  test('the playground renders its projects', async ({ page }) => {
    await page.goto('/playground');

    await expect(
      page.getByRole('heading', { name: 'Some deployed work' })
    ).toBeVisible();

    const cards = page.locator('article');
    expect(await cards.count()).toBeGreaterThan(0);

    // every card should offer a working-looking demo link and a screenshot
    await expect(
      cards.first().getByRole('link', { name: /Live Demo/ })
    ).toBeVisible();
    await expect(cards.first().getByRole('img')).toBeVisible();
  });
});
