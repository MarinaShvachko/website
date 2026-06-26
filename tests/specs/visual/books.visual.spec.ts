import { test, expect } from "@playwright/test";

test.describe("books page visual snapshot", () => {
  test("Books page visual snapshot desktop", async ({ page }) => {
    await test.step("Go to books page", async () => {
      await page.goto("/books");
    });

    await test.step("Take screenshot and compare with baseline", async () => {
      await expect(page).toHaveScreenshot("books_desktop.png", {
        fullPage: true,
        animations: "disabled",
      });
    });
  });

  test(
    "Books page visual snapshot mobile",
    { tag: "@mobile" },
    async ({ page }) => {
      await page.setViewportSize({ width: 390, height: 844 });
      await test.step("Go to books page", async () => {
        await page.goto("/books");
      });

      await test.step("Take screenshot and compare with baseline", async () => {
        await expect(page).toHaveScreenshot("books_mobile.png", {
          fullPage: true,
          animations: "disabled",
        });
      });
    },
  );
});
