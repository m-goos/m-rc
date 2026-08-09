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

  /**
   * Regression: the screenshots are 960x667 (1.44:1) but their frame asks for
   * 16/10 (1.6:1). Sized from its own ratio, the image was ~11% taller than
   * the frame — WebKit let it overflow onto the title (reported on iOS), while
   * Chromium instead stretched the frame to fit.
   *
   * Asserting the frame keeps its declared ratio catches the shared cause in
   * either engine; asserting the overlap alone would only fail on WebKit.
   */
  test('playground screenshots keep their frame at 16:10', async ({ page }) => {
    // narrow enough to stack the cards, which is where this was first seen
    await page.setViewportSize({ width: 375, height: 800 });
    await page.goto('/playground');

    const card = page.locator('article').first();
    const frame = card.locator('div.relative').first();
    const image = card.getByRole('img').first();
    const title = card.getByRole('heading').first();

    const frameBox = (await frame.boundingBox())!;
    const imageBox = (await image.boundingBox())!;
    const titleBox = (await title.boundingBox())!;

    expect(frameBox.width / frameBox.height).toBeCloseTo(16 / 10, 2);
    // the image is contained by the frame rather than driving its height
    expect(imageBox.y + imageBox.height).toBeLessThanOrEqual(
      frameBox.y + frameBox.height + 1
    );
    expect(imageBox.y + imageBox.height).toBeLessThanOrEqual(titleBox.y);
  });

  test('the active page is underlined in the nav', async ({ page }) => {
    // scoped to the <nav>, since post titles contain the word "blog" too
    const navLink = (name: string) =>
      page.getByRole('navigation').getByRole('link', { name, exact: true });

    await page.goto('/blog');
    await expect(navLink('Blog')).toHaveAttribute('aria-current', 'page');
    await expect(navLink('Playground')).not.toHaveAttribute(
      'aria-current',
      'page'
    );

    // a post keeps its section highlighted
    await page.goto('/blog/java-learning-strategy');
    await expect(navLink('Blog')).toHaveAttribute('aria-current', 'page');

    await page.goto('/playground');
    await expect(navLink('Playground')).toHaveAttribute('aria-current', 'page');
    await expect(navLink('Blog')).not.toHaveAttribute('aria-current', 'page');

    // the logo links home but is branding, so it never carries the underline
    await page.goto('/');
    await expect(navLink('m-rc')).not.toHaveAttribute('aria-current', 'page');
  });
});
