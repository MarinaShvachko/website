import { type Page, type Locator, expect } from "@playwright/test";

/**
 * Page Object for the /books page.
 *
 * Encapsulates the data-testid selectors so the specs stay readable and any
 * future selector change is isolated here.
 */
export class BooksPage {
  readonly page: Page;
  readonly loading: Locator;
  readonly error: Locator;
  readonly empty: Locator;
  readonly list: Locator;
  readonly cards: Locator;
  readonly searchInput: Locator;
  readonly sortScore: Locator;
  readonly genrePills: Locator;
  readonly filterReset: Locator;

  constructor(page: Page) {
    this.page = page;
    this.loading = page.getByTestId("books-loading");
    this.error = page.getByTestId("books-error");
    this.empty = page.getByTestId("books-empty");
    this.list = page.getByTestId("books-list");
    this.cards = page.getByTestId("book-card");
    this.searchInput = page.getByTestId("search-input");
    this.sortScore = page.getByTestId("sort-score");
    this.genrePills = page.getByTestId("genre-pill");
    this.filterReset = page.getByTestId("filter-reset");
  }

  async goto(): Promise<void> {
    await this.page.goto("/books");
  }

  /** Type into the search box (filters by title or author). */
  async search(query: string): Promise<void> {
    await this.searchInput.fill(query);
  }

  /** Click the genre pill carrying the given data-genre value ("" = All). */
  async selectGenre(genre: string): Promise<void> {
    await this.page
      .locator(`[data-testid="genre-pill"][data-genre="${genre}"]`)
      .click();
  }

  /** Choose a sort order: "" (default), "desc" (highest), "asc" (lowest). */
  async sortByScore(order: "" | "desc" | "asc"): Promise<void> {
    await this.sortScore.selectOption(order);
  }

  async reset(): Promise<void> {
    await this.filterReset.click();
  }

  /** Read each rendered card's numeric data-score, in DOM order. */
  async scoreOrder(): Promise<number[]> {
    const values = await this.cards.evaluateAll((cards) =>
      cards.map((card) => Number(card.getAttribute("data-score"))),
    );
    return values;
  }

  /** Assert that every currently rendered card carries the given attribute value. */
  async expectAllCardsHaveAttribute(
    attribute: "data-author" | "data-genre" | "data-score",
    value: string,
  ): Promise<void> {
    const count = await this.cards.count();
    for (let i = 0; i < count; i++) {
      await expect(this.cards.nth(i)).toHaveAttribute(attribute, value);
    }
  }
}
