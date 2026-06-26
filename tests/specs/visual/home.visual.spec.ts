import { test, expect } from "@playwright/test";

test.describe("home page visual snapshot", () => {
  test("Home page visual snapshot desktop", async ({ page }) => {
    await test.step("Go to home page", async () => {
      await page.goto("/");
    });

    await test.step("Take screenshot and compare with baseline", async () => {
      await expect(page).toHaveScreenshot("home_desktop.png", {
        fullPage: true,
        animations: "disabled",
      });
    });
  });

  test(
    "Home page visual snapshot mobile",
    { tag: "@mobile" },
    async ({ page }) => {
      await page.setViewportSize({ width: 390, height: 844 });
      await test.step("Go to home page", async () => {
        await page.goto("/");
      });

      await test.step("Take screenshot and compare with baseline", async () => {
        await expect(page).toHaveScreenshot("home_mobile.png", {
          fullPage: true,
          animations: "disabled",
        });
      });
    },
  );
});
