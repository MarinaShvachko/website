import { test, expect } from "@playwright/test";

test.describe("projects page visual snapshot", () => {
  test("Projects page visual snapshot desktop", async ({ page }) => {
    await test.step("Go to projects page", async () => {
      await page.goto("/projects");
    });

    await test.step("Take screenshot and compare with baseline", async () => {
      await expect(page).toHaveScreenshot("projects_desktop.png", {
        fullPage: true,
        animations: "disabled",
      });
    });
  });

  test(
    "Projects page visual snapshot mobile",
    { tag: "@mobile" },
    async ({ page }) => {
      await page.setViewportSize({ width: 390, height: 844 });
      await test.step("Go to projects page", async () => {
        await page.goto("/projects");
      });

      await test.step("Take screenshot and compare with baseline", async () => {
        await expect(page).toHaveScreenshot("projects_mobile.png", {
          fullPage: true,
          animations: "disabled",
        });
      });
    },
  );
});
