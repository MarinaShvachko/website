import { test, expect } from "@playwright/test";
import { books, expectedCounts } from "../../fixtures/books.fixture";
import { BooksPage } from "../../pages/booksPage";

/**
 * Verifies the search box, genre pill-list and score sort on the /books page.
 * The API is mocked with the fixture so the rendered set is fully known; the
 * search + genre filters use AND logic and non-matching cards are removed.
 */
test.describe("books page filters", () => {
  let booksPage: BooksPage;

  test.beforeEach(async ({ page }) => {
    booksPage = new BooksPage(page);
    await page.route("**/api/books", async (route) => {
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify(books),
      });
    });
    await booksPage.goto();
    // Wait for the full set to render before applying filters.
    await expect(booksPage.cards).toHaveCount(expectedCounts.total);
  });

  test("search filters by author", async () => {
    await test.step('Search for "herbert"', async () => {
      await booksPage.search("herbert");
    });

    await test.step("Only Frank Herbert's books remain", async () => {
      await expect(booksPage.cards).toHaveCount(
        expectedCounts.author["Frank Herbert"],
      );
      await booksPage.expectAllCardsHaveAttribute(
        "data-author",
        "Frank Herbert",
      );
    });
  });

  test("search filters by title", async () => {
    await test.step('Search for "clean code"', async () => {
      await booksPage.search("clean code");
    });

    await test.step("Only the matching title remains", async () => {
      await expect(booksPage.cards).toHaveCount(1);
      await expect(booksPage.cards.getByTestId("book-title")).toHaveText(
        "Clean Code",
      );
    });
  });

  test("genre pill shows only matching books", async () => {
    const genre = "Tech";
    await test.step(`Click the "${genre}" genre pill`, async () => {
      await booksPage.selectGenre(genre);
    });

    await test.step("Only cards with that genre remain", async () => {
      await expect(booksPage.cards).toHaveCount(expectedCounts.genre[genre]);
      await booksPage.expectAllCardsHaveAttribute("data-genre", genre);
    });
  });

  test("search + genre combine with AND logic", async () => {
    await test.step('Search "Frank" and pick genre "Sci-Fi"', async () => {
      await booksPage.search("Frank");
      await booksPage.selectGenre("Sci-Fi");
    });

    await test.step("Only books matching both remain", async () => {
      await expect(booksPage.cards).toHaveCount(
        expectedCounts.combinedAuthorGenre,
      );
      await booksPage.expectAllCardsHaveAttribute("data-author", "Frank Herbert");
      await booksPage.expectAllCardsHaveAttribute("data-genre", "Sci-Fi");
    });
  });

  test("sort by score orders the list highest and lowest first", async () => {
    await test.step("Sort highest first (descending)", async () => {
      await booksPage.sortByScore("desc");
      const scores = await booksPage.scoreOrder();
      expect(scores).toHaveLength(expectedCounts.total);
      const sortedDesc = [...scores].sort((a, b) => b - a);
      expect(scores).toEqual(sortedDesc);
    });

    await test.step("Sort lowest first (ascending)", async () => {
      await booksPage.sortByScore("asc");
      const scores = await booksPage.scoreOrder();
      const sortedAsc = [...scores].sort((a, b) => a - b);
      expect(scores).toEqual(sortedAsc);
    });
  });

  test("reset restores all books", async () => {
    await test.step("Apply a search + genre filter first", async () => {
      await booksPage.search("Frank");
      await booksPage.selectGenre("Sci-Fi");
      await expect(booksPage.cards).toHaveCount(
        expectedCounts.combinedAuthorGenre,
      );
    });

    await test.step("Reset and expect the full set again", async () => {
      await booksPage.reset();
      await expect(booksPage.cards).toHaveCount(expectedCounts.total);
    });
  });

  test("no-results search shows the empty state", async () => {
    await test.step("Search for a term that matches nothing", async () => {
      await booksPage.search("zzzznomatch");
    });

    await test.step("No cards remain and the empty state is visible", async () => {
      await expect(booksPage.cards).toHaveCount(0);
      await expect(booksPage.empty).toBeVisible();
    });
  });
});
