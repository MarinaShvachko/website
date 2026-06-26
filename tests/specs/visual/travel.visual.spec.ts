import { test, expect } from "@playwright/test";

test.describe("travel page visual snapshot", () => {
  test("Travel page visual snapshot desktop", async ({ page }) => {
    await test.step("Go to travel page", async () => {
      await page.goto("/travel");
    });

    await test.step("Take screenshot and compare with baseline", async () => {
      await expect(page).toHaveScreenshot("travel_desktop.png", {
        fullPage: true,
        animations: "disabled",
      });
    });
  });

  test(
    "Travel page visual snapshot mobile",
    { tag: "@mobile" },
    async ({ page }) => {
      await page.setViewportSize({ width: 390, height: 844 });
      await test.step("Go to travel page", async () => {
        await page.goto("/travel");
      });

      await test.step("Take screenshot and compare with baseline", async () => {
        await expect(page).toHaveScreenshot("travel_mobile.png", {
          fullPage: true,
          animations: "disabled",
        });
      });
    },
  );
});

test.describe("travel/vietnam page visual snapshot", () => {
  test("Vietnam page visual snapshot desktop", async ({ page }) => {
    await test.step("Go to travel/vietnam page", async () => {
      await page.goto("/travel/vietnam");
    });

    await test.step("Take screenshot and compare with baseline", async () => {
      await expect(page).toHaveScreenshot("travel_vietnam_desktop.png", {
        fullPage: true,
        animations: "disabled",
      });
    });
  });

  test(
    "Vietnam page visual snapshot mobile",
    { tag: "@mobile" },
    async ({ page }) => {
      await page.setViewportSize({ width: 390, height: 844 });
      await test.step("Go to travel/vietnam page", async () => {
        await page.goto("/travel/vietnam");
      });

      await test.step("Take screenshot and compare with baseline", async () => {
        await expect(page).toHaveScreenshot("travel_vietnam_mobile.png", {
          fullPage: true,
          animations: "disabled",
        });
      });
    },
  );
});

test.describe("travel/vietnam/day1 page visual snapshot", () => {
  test("Vietnam Day 1 page visual snapshot desktop", async ({ page }) => {
    await test.step("Go to travel/vietnam/day1 page", async () => {
      await page.goto("/travel/vietnam/day1");
    });

    await test.step("Take screenshot and compare with baseline", async () => {
      await expect(page).toHaveScreenshot("travel_vietnam_day1_desktop.png", {
        fullPage: true,
        animations: "disabled",
      });
    });
  });

  test(
    "Vietnam Day 1 page visual snapshot mobile",
    { tag: "@mobile" },
    async ({ page }) => {
      await page.setViewportSize({ width: 390, height: 844 });
      await test.step("Go to travel/vietnam/day1 page", async () => {
        await page.goto("/travel/vietnam/day1");
      });

      await test.step("Take screenshot and compare with baseline", async () => {
        await expect(page).toHaveScreenshot("travel_vietnam_day1_mobile.png", {
          fullPage: true,
          animations: "disabled",
        });
      });
    },
  );
});

test.describe("travel/vietnam/day2 page visual snapshot", () => {
  test("Vietnam Day 2 page visual snapshot desktop", async ({ page }) => {
    await test.step("Go to travel/vietnam/day2 page", async () => {
      await page.goto("/travel/vietnam/day2");
    });

    await test.step("Take screenshot and compare with baseline", async () => {
      await expect(page).toHaveScreenshot("travel_vietnam_day2_desktop.png", {
        fullPage: true,
        animations: "disabled",
      });
    });
  });

  test(
    "Vietnam Day 2 page visual snapshot mobile",
    { tag: "@mobile" },
    async ({ page }) => {
      await page.setViewportSize({ width: 390, height: 844 });
      await test.step("Go to travel/vietnam/day2 page", async () => {
        await page.goto("/travel/vietnam/day2");
      });

      await test.step("Take screenshot and compare with baseline", async () => {
        await expect(page).toHaveScreenshot("travel_vietnam_day2_mobile.png", {
          fullPage: true,
          animations: "disabled",
        });
      });
    },
  );
});

test.describe("travel/vietnam/day3 page visual snapshot", () => {
  test("Vietnam Day 3 page visual snapshot desktop", async ({ page }) => {
    await test.step("Go to travel/vietnam/day3 page", async () => {
      await page.goto("/travel/vietnam/day3");
    });

    await test.step("Take screenshot and compare with baseline", async () => {
      await expect(page).toHaveScreenshot("travel_vietnam_day3_desktop.png", {
        fullPage: true,
        animations: "disabled",
      });
    });
  });

  test(
    "Vietnam Day 3 page visual snapshot mobile",
    { tag: "@mobile" },
    async ({ page }) => {
      await page.setViewportSize({ width: 390, height: 844 });
      await test.step("Go to travel/vietnam/day3 page", async () => {
        await page.goto("/travel/vietnam/day3");
      });

      await test.step("Take screenshot and compare with baseline", async () => {
        await expect(page).toHaveScreenshot("travel_vietnam_day3_mobile.png", {
          fullPage: true,
          animations: "disabled",
        });
      });
    },
  );
});

test.describe("travel/vietnam/day4 page visual snapshot", () => {
  test("Vietnam Day 4 page visual snapshot desktop", async ({ page }) => {
    await test.step("Go to travel/vietnam/day4 page", async () => {
      await page.goto("/travel/vietnam/day4");
    });

    await test.step("Take screenshot and compare with baseline", async () => {
      await expect(page).toHaveScreenshot("travel_vietnam_day4_desktop.png", {
        fullPage: true,
        animations: "disabled",
      });
    });
  });

  test(
    "Vietnam Day 4 page visual snapshot mobile",
    { tag: "@mobile" },
    async ({ page }) => {
      await page.setViewportSize({ width: 390, height: 844 });
      await test.step("Go to travel/vietnam/day4 page", async () => {
        await page.goto("/travel/vietnam/day4");
      });

      await test.step("Take screenshot and compare with baseline", async () => {
        await expect(page).toHaveScreenshot("travel_vietnam_day4_mobile.png", {
          fullPage: true,
          animations: "disabled",
        });
      });
    },
  );
});

test.describe("travel/vietnam/day5 page visual snapshot", () => {
  test("Vietnam Day 5 page visual snapshot desktop", async ({ page }) => {
    await test.step("Go to travel/vietnam/day5 page", async () => {
      await page.goto("/travel/vietnam/day5");
    });

    await test.step("Take screenshot and compare with baseline", async () => {
      await expect(page).toHaveScreenshot("travel_vietnam_day5_desktop.png", {
        fullPage: true,
        animations: "disabled",
      });
    });
  });

  test(
    "Vietnam Day 5 page visual snapshot mobile",
    { tag: "@mobile" },
    async ({ page }) => {
      await page.setViewportSize({ width: 390, height: 844 });
      await test.step("Go to travel/vietnam/day5 page", async () => {
        await page.goto("/travel/vietnam/day5");
      });

      await test.step("Take screenshot and compare with baseline", async () => {
        await expect(page).toHaveScreenshot("travel_vietnam_day5_mobile.png", {
          fullPage: true,
          animations: "disabled",
        });
      });
    },
  );
});

test.describe("travel/vietnam/day6 page visual snapshot", () => {
  test("Vietnam Day 6 page visual snapshot desktop", async ({ page }) => {
    await test.step("Go to travel/vietnam/day6 page", async () => {
      await page.goto("/travel/vietnam/day6");
    });

    await test.step("Take screenshot and compare with baseline", async () => {
      await expect(page).toHaveScreenshot("travel_vietnam_day6_desktop.png", {
        fullPage: true,
        animations: "disabled",
      });
    });
  });

  test(
    "Vietnam Day 6 page visual snapshot mobile",
    { tag: "@mobile" },
    async ({ page }) => {
      await page.setViewportSize({ width: 390, height: 844 });
      await test.step("Go to travel/vietnam/day6 page", async () => {
        await page.goto("/travel/vietnam/day6");
      });

      await test.step("Take screenshot and compare with baseline", async () => {
        await expect(page).toHaveScreenshot("travel_vietnam_day6_mobile.png", {
          fullPage: true,
          animations: "disabled",
        });
      });
    },
  );
});

test.describe("travel/vietnam/day7 page visual snapshot", () => {
  test("Vietnam Day 7 page visual snapshot desktop", async ({ page }) => {
    await test.step("Go to travel/vietnam/day7 page", async () => {
      await page.goto("/travel/vietnam/day7");
    });

    await test.step("Take screenshot and compare with baseline", async () => {
      await expect(page).toHaveScreenshot("travel_vietnam_day7_desktop.png", {
        fullPage: true,
        animations: "disabled",
      });
    });
  });

  test(
    "Vietnam Day 7 page visual snapshot mobile",
    { tag: "@mobile" },
    async ({ page }) => {
      await page.setViewportSize({ width: 390, height: 844 });
      await test.step("Go to travel/vietnam/day7 page", async () => {
        await page.goto("/travel/vietnam/day7");
      });

      await test.step("Take screenshot and compare with baseline", async () => {
        await expect(page).toHaveScreenshot("travel_vietnam_day7_mobile.png", {
          fullPage: true,
          animations: "disabled",
        });
      });
    },
  );
});

test.describe("travel/vietnam/day8 page visual snapshot", () => {
  test("Vietnam Day 8 page visual snapshot desktop", async ({ page }) => {
    await test.step("Go to travel/vietnam/day8 page", async () => {
      await page.goto("/travel/vietnam/day8");
    });

    await test.step("Take screenshot and compare with baseline", async () => {
      await expect(page).toHaveScreenshot("travel_vietnam_day8_desktop.png", {
        fullPage: true,
        animations: "disabled",
      });
    });
  });

  test(
    "Vietnam Day 8 page visual snapshot mobile",
    { tag: "@mobile" },
    async ({ page }) => {
      await page.setViewportSize({ width: 390, height: 844 });
      await test.step("Go to travel/vietnam/day8 page", async () => {
        await page.goto("/travel/vietnam/day8");
      });

      await test.step("Take screenshot and compare with baseline", async () => {
        await expect(page).toHaveScreenshot("travel_vietnam_day8_mobile.png", {
          fullPage: true,
          animations: "disabled",
        });
      });
    },
  );
});

test.describe("travel/vietnam/day9 page visual snapshot", () => {
  test("Vietnam Day 9 page visual snapshot desktop", async ({ page }) => {
    await test.step("Go to travel/vietnam/day9 page", async () => {
      await page.goto("/travel/vietnam/day9");
    });

    await test.step("Take screenshot and compare with baseline", async () => {
      await expect(page).toHaveScreenshot("travel_vietnam_day9_desktop.png", {
        fullPage: true,
        animations: "disabled",
      });
    });
  });

  test(
    "Vietnam Day 9 page visual snapshot mobile",
    { tag: "@mobile" },
    async ({ page }) => {
      await page.setViewportSize({ width: 390, height: 844 });
      await test.step("Go to travel/vietnam/day9 page", async () => {
        await page.goto("/travel/vietnam/day9");
      });

      await test.step("Take screenshot and compare with baseline", async () => {
        await expect(page).toHaveScreenshot("travel_vietnam_day9_mobile.png", {
          fullPage: true,
          animations: "disabled",
        });
      });
    },
  );
});

test.describe("travel/vietnam/day10 page visual snapshot", () => {
  test("Vietnam Day 10 page visual snapshot desktop", async ({ page }) => {
    await test.step("Go to travel/vietnam/day10 page", async () => {
      await page.goto("/travel/vietnam/day10");
    });

    await test.step("Take screenshot and compare with baseline", async () => {
      await expect(page).toHaveScreenshot("travel_vietnam_day10_desktop.png", {
        fullPage: true,
        animations: "disabled",
      });
    });
  });

  test(
    "Vietnam Day 10 page visual snapshot mobile",
    { tag: "@mobile" },
    async ({ page }) => {
      await page.setViewportSize({ width: 390, height: 844 });
      await test.step("Go to travel/vietnam/day10 page", async () => {
        await page.goto("/travel/vietnam/day10");
      });

      await test.step("Take screenshot and compare with baseline", async () => {
        await expect(page).toHaveScreenshot("travel_vietnam_day10_mobile.png", {
          fullPage: true,
          animations: "disabled",
        });
      });
    },
  );
});

test.describe("travel/vietnam/day11 page visual snapshot", () => {
  test("Vietnam Day 11 page visual snapshot desktop", async ({ page }) => {
    await test.step("Go to travel/vietnam/day11 page", async () => {
      await page.goto("/travel/vietnam/day11");
    });

    await test.step("Take screenshot and compare with baseline", async () => {
      await expect(page).toHaveScreenshot("travel_vietnam_day11_desktop.png", {
        fullPage: true,
        animations: "disabled",
      });
    });
  });

  test(
    "Vietnam Day 11 page visual snapshot mobile",
    { tag: "@mobile" },
    async ({ page }) => {
      await page.setViewportSize({ width: 390, height: 844 });
      await test.step("Go to travel/vietnam/day11 page", async () => {
        await page.goto("/travel/vietnam/day11");
      });

      await test.step("Take screenshot and compare with baseline", async () => {
        await expect(page).toHaveScreenshot("travel_vietnam_day11_mobile.png", {
          fullPage: true,
          animations: "disabled",
        });
      });
    },
  );
});

test.describe("travel/israel page visual snapshot", () => {
  test("Israel page visual snapshot desktop", async ({ page }) => {
    await test.step("Go to travel/israel page", async () => {
      await page.goto("/travel/israel");
    });

    await test.step("Take screenshot and compare with baseline", async () => {
      await expect(page).toHaveScreenshot("travel_israel_desktop.png", {
        fullPage: true,
        animations: "disabled",
      });
    });
  });

  test(
    "Israel page visual snapshot mobile",
    { tag: "@mobile" },
    async ({ page }) => {
      await page.setViewportSize({ width: 390, height: 844 });
      await test.step("Go to travel/israel page", async () => {
        await page.goto("/travel/israel");
      });

      await test.step("Take screenshot and compare with baseline", async () => {
        await expect(page).toHaveScreenshot("travel_israel_mobile.png", {
          fullPage: true,
          animations: "disabled",
        });
      });
    },
  );
});

test.describe("travel/israel/apartment page visual snapshot", () => {
  test("Israel Apartment page visual snapshot desktop", async ({ page }) => {
    await test.step("Go to travel/israel/apartment page", async () => {
      await page.goto("/travel/israel/apartment");
    });

    await test.step("Take screenshot and compare with baseline", async () => {
      await expect(page).toHaveScreenshot(
        "travel_israel_apartment_desktop.png",
        {
          fullPage: true,
          animations: "disabled",
        },
      );
    });
  });

  test(
    "Israel Apartment page visual snapshot mobile",
    { tag: "@mobile" },
    async ({ page }) => {
      await page.setViewportSize({ width: 390, height: 844 });
      await test.step("Go to travel/israel/apartment page", async () => {
        await page.goto("/travel/israel/apartment");
      });

      await test.step("Take screenshot and compare with baseline", async () => {
        await expect(page).toHaveScreenshot(
          "travel_israel_apartment_mobile.png",
          {
            fullPage: true,
            animations: "disabled",
          },
        );
      });
    },
  );
});

test.describe("travel/israel/beaches page visual snapshot", () => {
  test("Israel Beaches page visual snapshot desktop", async ({ page }) => {
    await test.step("Go to travel/israel/beaches page", async () => {
      await page.goto("/travel/israel/beaches");
    });

    await test.step("Take screenshot and compare with baseline", async () => {
      await expect(page).toHaveScreenshot("travel_israel_beaches_desktop.png", {
        fullPage: true,
        animations: "disabled",
      });
    });
  });

  test(
    "Israel Beaches page visual snapshot mobile",
    { tag: "@mobile" },
    async ({ page }) => {
      await page.setViewportSize({ width: 390, height: 844 });
      await test.step("Go to travel/israel/beaches page", async () => {
        await page.goto("/travel/israel/beaches");
      });

      await test.step("Take screenshot and compare with baseline", async () => {
        await expect(page).toHaveScreenshot(
          "travel_israel_beaches_mobile.png",
          {
            fullPage: true,
            animations: "disabled",
          },
        );
      });
    },
  );
});

test.describe("travel/israel/first-day page visual snapshot", () => {
  test("Israel First Day page visual snapshot desktop", async ({ page }) => {
    await test.step("Go to travel/israel/first-day page", async () => {
      await page.goto("/travel/israel/first-day");
    });

    await test.step("Take screenshot and compare with baseline", async () => {
      await expect(page).toHaveScreenshot(
        "travel_israel_first_day_desktop.png",
        {
          fullPage: true,
          animations: "disabled",
        },
      );
    });
  });

  test(
    "Israel First Day page visual snapshot mobile",
    { tag: "@mobile" },
    async ({ page }) => {
      await page.setViewportSize({ width: 390, height: 844 });
      await test.step("Go to travel/israel/first-day page", async () => {
        await page.goto("/travel/israel/first-day");
      });

      await test.step("Take screenshot and compare with baseline", async () => {
        await expect(page).toHaveScreenshot(
          "travel_israel_first_day_mobile.png",
          {
            fullPage: true,
            animations: "disabled",
          },
        );
      });
    },
  );
});

test.describe("travel/israel/haifa page visual snapshot", () => {
  test("Israel Haifa page visual snapshot desktop", async ({ page }) => {
    await test.step("Go to travel/israel/haifa page", async () => {
      await page.goto("/travel/israel/haifa");
    });

    await test.step("Take screenshot and compare with baseline", async () => {
      await expect(page).toHaveScreenshot("travel_israel_haifa_desktop.png", {
        fullPage: true,
        animations: "disabled",
      });
    });
  });

  test(
    "Israel Haifa page visual snapshot mobile",
    { tag: "@mobile" },
    async ({ page }) => {
      await page.setViewportSize({ width: 390, height: 844 });
      await test.step("Go to travel/israel/haifa page", async () => {
        await page.goto("/travel/israel/haifa");
      });

      await test.step("Take screenshot and compare with baseline", async () => {
        await expect(page).toHaveScreenshot("travel_israel_haifa_mobile.png", {
          fullPage: true,
          animations: "disabled",
        });
      });
    },
  );
});

test.describe("travel/israel/jerusalem page visual snapshot", () => {
  test("Israel Jerusalem page visual snapshot desktop", async ({ page }) => {
    await test.step("Go to travel/israel/jerusalem page", async () => {
      await page.goto("/travel/israel/jerusalem");
    });

    await test.step("Take screenshot and compare with baseline", async () => {
      await expect(page).toHaveScreenshot(
        "travel_israel_jerusalem_desktop.png",
        {
          fullPage: true,
          animations: "disabled",
        },
      );
    });
  });

  test(
    "Israel Jerusalem page visual snapshot mobile",
    { tag: "@mobile" },
    async ({ page }) => {
      await page.setViewportSize({ width: 390, height: 844 });
      await test.step("Go to travel/israel/jerusalem page", async () => {
        await page.goto("/travel/israel/jerusalem");
      });

      await test.step("Take screenshot and compare with baseline", async () => {
        await expect(page).toHaveScreenshot(
          "travel_israel_jerusalem_mobile.png",
          {
            fullPage: true,
            animations: "disabled",
          },
        );
      });
    },
  );
});

test.describe("travel/israel/modern-districts page visual snapshot", () => {
  test("Israel Modern Districts page visual snapshot desktop", async ({
    page,
  }) => {
    await test.step("Go to travel/israel/modern-districts page", async () => {
      await page.goto("/travel/israel/modern-districts");
    });

    await test.step("Take screenshot and compare with baseline", async () => {
      await expect(page).toHaveScreenshot(
        "travel_israel_modern_districts_desktop.png",
        {
          fullPage: true,
          animations: "disabled",
        },
      );
    });
  });

  test(
    "Israel Modern Districts page visual snapshot mobile",
    { tag: "@mobile" },
    async ({ page }) => {
      await page.setViewportSize({ width: 390, height: 844 });
      await test.step("Go to travel/israel/modern-districts page", async () => {
        await page.goto("/travel/israel/modern-districts");
      });

      await test.step("Take screenshot and compare with baseline", async () => {
        await expect(page).toHaveScreenshot(
          "travel_israel_modern_districts_mobile.png",
          {
            fullPage: true,
            animations: "disabled",
          },
        );
      });
    },
  );
});

test.describe("travel/israel/new-year page visual snapshot", () => {
  test("Israel New Year page visual snapshot desktop", async ({ page }) => {
    await test.step("Go to travel/israel/new-year page", async () => {
      await page.goto("/travel/israel/new-year");
    });

    await test.step("Take screenshot and compare with baseline", async () => {
      await expect(page).toHaveScreenshot(
        "travel_israel_new_year_desktop.png",
        {
          fullPage: true,
          animations: "disabled",
        },
      );
    });
  });

  test(
    "Israel New Year page visual snapshot mobile",
    { tag: "@mobile" },
    async ({ page }) => {
      await page.setViewportSize({ width: 390, height: 844 });
      await test.step("Go to travel/israel/new-year page", async () => {
        await page.goto("/travel/israel/new-year");
      });

      await test.step("Take screenshot and compare with baseline", async () => {
        await expect(page).toHaveScreenshot(
          "travel_israel_new_year_mobile.png",
          {
            fullPage: true,
            animations: "disabled",
          },
        );
      });
    },
  );
});

test.describe("travel/israel/old-town page visual snapshot", () => {
  test("Israel Old Town page visual snapshot desktop", async ({ page }) => {
    await test.step("Go to travel/israel/old-town page", async () => {
      await page.goto("/travel/israel/old-town");
    });

    await test.step("Take screenshot and compare with baseline", async () => {
      await expect(page).toHaveScreenshot(
        "travel_israel_old_town_desktop.png",
        {
          fullPage: true,
          animations: "disabled",
        },
      );
    });
  });

  test(
    "Israel Old Town page visual snapshot mobile",
    { tag: "@mobile" },
    async ({ page }) => {
      await page.setViewportSize({ width: 390, height: 844 });
      await test.step("Go to travel/israel/old-town page", async () => {
        await page.goto("/travel/israel/old-town");
      });

      await test.step("Take screenshot and compare with baseline", async () => {
        await expect(page).toHaveScreenshot(
          "travel_israel_old_town_mobile.png",
          {
            fullPage: true,
            animations: "disabled",
          },
        );
      });
    },
  );
});

test.describe("travel/greece page visual snapshot", () => {
  test("Greece page visual snapshot desktop", async ({ page }) => {
    await test.step("Go to travel/greece page", async () => {
      await page.goto("/travel/greece");
    });

    await test.step("Take screenshot and compare with baseline", async () => {
      await expect(page).toHaveScreenshot("travel_greece_desktop.png", {
        fullPage: true,
        animations: "disabled",
      });
    });
  });

  test(
    "Greece page visual snapshot mobile",
    { tag: "@mobile" },
    async ({ page }) => {
      await page.setViewportSize({ width: 390, height: 844 });
      await test.step("Go to travel/greece page", async () => {
        await page.goto("/travel/greece");
      });

      await test.step("Take screenshot and compare with baseline", async () => {
        await expect(page).toHaveScreenshot("travel_greece_mobile.png", {
          fullPage: true,
          animations: "disabled",
        });
      });
    },
  );
});

test.describe("travel/prague page visual snapshot", () => {
  test("Prague page visual snapshot desktop", async ({ page }) => {
    await test.step("Go to travel/prague page", async () => {
      await page.goto("/travel/prague");
    });

    await test.step("Take screenshot and compare with baseline", async () => {
      await expect(page).toHaveScreenshot("travel_prague_desktop.png", {
        fullPage: true,
        animations: "disabled",
      });
    });
  });

  test(
    "Prague page visual snapshot mobile",
    { tag: "@mobile" },
    async ({ page }) => {
      await page.setViewportSize({ width: 390, height: 844 });
      await test.step("Go to travel/prague page", async () => {
        await page.goto("/travel/prague");
      });

      await test.step("Take screenshot and compare with baseline", async () => {
        await expect(page).toHaveScreenshot("travel_prague_mobile.png", {
          fullPage: true,
          animations: "disabled",
        });
      });
    },
  );
});

test.describe("travel/spain page visual snapshot", () => {
  test("Spain page visual snapshot desktop", async ({ page }) => {
    await test.step("Go to travel/spain page", async () => {
      await page.goto("/travel/spain");
    });

    await test.step("Take screenshot and compare with baseline", async () => {
      await expect(page).toHaveScreenshot("travel_spain_desktop.png", {
        fullPage: true,
        animations: "disabled",
      });
    });
  });

  test(
    "Spain page visual snapshot mobile",
    { tag: "@mobile" },
    async ({ page }) => {
      await page.setViewportSize({ width: 390, height: 844 });
      await test.step("Go to travel/spain page", async () => {
        await page.goto("/travel/spain");
      });

      await test.step("Take screenshot and compare with baseline", async () => {
        await expect(page).toHaveScreenshot("travel_spain_mobile.png", {
          fullPage: true,
          animations: "disabled",
        });
      });
    },
  );
});

test.describe("travel/egypt page visual snapshot", () => {
  test("Egypt page visual snapshot desktop", async ({ page }) => {
    await test.step("Go to travel/egypt page", async () => {
      await page.goto("/travel/egypt");
    });

    await test.step("Take screenshot and compare with baseline", async () => {
      await expect(page).toHaveScreenshot("travel_egypt_desktop.png", {
        fullPage: true,
        animations: "disabled",
      });
    });
  });

  test(
    "Egypt page visual snapshot mobile",
    { tag: "@mobile" },
    async ({ page }) => {
      await page.setViewportSize({ width: 390, height: 844 });
      await test.step("Go to travel/egypt page", async () => {
        await page.goto("/travel/egypt");
      });

      await test.step("Take screenshot and compare with baseline", async () => {
        await expect(page).toHaveScreenshot("travel_egypt_mobile.png", {
          fullPage: true,
          animations: "disabled",
        });
      });
    },
  );
});

test.describe("travel/vacation page visual snapshot", () => {
  test("Vacation page visual snapshot desktop", async ({ page }) => {
    await test.step("Go to travel/vacation page", async () => {
      await page.goto("/travel/vacation");
    });

    await test.step("Take screenshot and compare with baseline", async () => {
      await expect(page).toHaveScreenshot("travel_vacation_desktop.png", {
        fullPage: true,
        animations: "disabled",
      });
    });
  });

  test(
    "Vacation page visual snapshot mobile",
    { tag: "@mobile" },
    async ({ page }) => {
      await page.setViewportSize({ width: 390, height: 844 });
      await test.step("Go to travel/vacation page", async () => {
        await page.goto("/travel/vacation");
      });

      await test.step("Take screenshot and compare with baseline", async () => {
        await expect(page).toHaveScreenshot("travel_vacation_mobile.png", {
          fullPage: true,
          animations: "disabled",
        });
      });
    },
  );
});

test.describe("travel/italy page visual snapshot", () => {
  test("Italy page visual snapshot desktop", async ({ page }) => {
    await test.step("Go to travel/italy page", async () => {
      await page.goto("/travel/italy");
    });

    await test.step("Take screenshot and compare with baseline", async () => {
      await expect(page).toHaveScreenshot("travel_italy_desktop.png", {
        fullPage: true,
        animations: "disabled",
      });
    });
  });

  test(
    "Italy page visual snapshot mobile",
    { tag: "@mobile" },
    async ({ page }) => {
      await page.setViewportSize({ width: 390, height: 844 });
      await test.step("Go to travel/italy page", async () => {
        await page.goto("/travel/italy");
      });

      await test.step("Take screenshot and compare with baseline", async () => {
        await expect(page).toHaveScreenshot("travel_italy_mobile.png", {
          fullPage: true,
          animations: "disabled",
        });
      });
    },
  );
});
