import { test, expect } from "@playwright/test";
import { books } from "../../fixtures/books.fixture";
import { BooksPage } from "../../pages/booksPage";

/**
 * Verifies the /books page fetches data from the Worker API (path ending in
 * /api/books) and renders the returned Book[]. The request is intercepted with
 * page.route() so the test is deterministic and does not need a live Worker.
 */
test.describe("books page network + rendering", () => {
  test("fetches /api/books and renders the returned data", async ({ page }) => {
    const booksPage = new BooksPage(page);
    let routeWasHit = false;

    await test.step("Mock the /api/books response before navigation", async () => {
      await page.route("**/api/books", async (route) => {
        routeWasHit = true;
        await route.fulfill({
          status: 200,
          contentType: "application/json",
          body: JSON.stringify(books),
        });
      });
    });

    await test.step("Navigate and assert a GET request hits /api/books", async () => {
      const requestPromise = page.waitForRequest("**/api/books");
      await booksPage.goto();
      const request = await requestPromise;
      expect(request.method()).toBe("GET");
      expect(request.url()).toMatch(/\/api\/books$/);
      expect(routeWasHit).toBe(true);
    });

    await test.step("Render one card per fixture book", async () => {
      await expect(booksPage.cards).toHaveCount(books.length);
    });

    await test.step("First card reflects the first fixture book", async () => {
      const first = books[0];
      const card = booksPage.cards.first();
      await expect(card.getByTestId("book-title")).toHaveText(first.title);
      await expect(card.getByTestId("book-author")).toHaveText(first.author);
      await expect(card.getByTestId("book-score")).toContainText(
        String(first.my_score),
      );
      await expect(card.getByTestId("book-genre")).toHaveText(first.genre);
      await expect(card.getByTestId("book-comment")).toHaveText(
        first.my_comment,
      );
    });
  });

  test("shows the error state when the API returns 500", async ({ page }) => {
    const booksPage = new BooksPage(page);

    await test.step("Mock a 500 response before navigation", async () => {
      await page.route("**/api/books", async (route) => {
        await route.fulfill({
          status: 500,
          contentType: "application/json",
          body: JSON.stringify({ error: "Internal Server Error" }),
        });
      });
    });

    await test.step("Navigate and assert the error state is visible", async () => {
      await booksPage.goto();
      await expect(booksPage.error).toBeVisible();
    });
  });
});
