import { test, expect } from '@playwright/test';

test.describe('aqa page visual snapshot', () => {
    test('AQA page visual snapshot desktop', async ({ page }) => {
        await test.step('Go to aqa page', async () => {
            await page.goto('/aqa');
        });

        await test.step('Take screenshot and compare with baseline', async () => {
            await expect(page).toHaveScreenshot('aqa_desktop.png', {
                fullPage: true,
                animations: 'disabled',
            });
        });
    });

    test('AQA page visual snapshot mobile', { tag: '@mobile' }, async ({ page }) => {
        await page.setViewportSize({ width: 390, height: 844 });
        await test.step('Go to aqa page', async () => {
            await page.goto('/aqa');
        });

        await test.step('Take screenshot and compare with baseline', async () => {
            await expect(page).toHaveScreenshot('aqa_mobile.png', {
                fullPage: true,
                animations: 'disabled',
            });
        });
    });
});

test.describe('aqa/docker page visual snapshot', () => {
    test('AQA Docker page visual snapshot desktop', async ({ page }) => {
        await test.step('Go to aqa/docker page', async () => {
            await page.goto('/aqa/docker');
        });

        await test.step('Take screenshot and compare with baseline', async () => {
            await expect(page).toHaveScreenshot('aqa_docker_desktop.png', {
                fullPage: true,
                animations: 'disabled',
            });
        });
    });

    test('AQA Docker page visual snapshot mobile', { tag: '@mobile' }, async ({ page }) => {
        await page.setViewportSize({ width: 390, height: 844 });
        await test.step('Go to aqa/docker page', async () => {
            await page.goto('/aqa/docker');
        });

        await test.step('Take screenshot and compare with baseline', async () => {
            await expect(page).toHaveScreenshot('aqa_docker_mobile.png', {
                fullPage: true,
                animations: 'disabled',
            });
        });
    });
});

test.describe('aqa/jenkins page visual snapshot', () => {
    test('AQA Jenkins page visual snapshot desktop', async ({ page }) => {
        await test.step('Go to aqa/jenkins page', async () => {
            await page.goto('/aqa/jenkins');
        });

        await test.step('Take screenshot and compare with baseline', async () => {
            await expect(page).toHaveScreenshot('aqa_jenkins_desktop.png', {
                fullPage: true,
                animations: 'disabled',
            });
        });
    });

    test('AQA Jenkins page visual snapshot mobile', { tag: '@mobile' }, async ({ page }) => {
        await page.setViewportSize({ width: 390, height: 844 });
        await test.step('Go to aqa/jenkins page', async () => {
            await page.goto('/aqa/jenkins');
        });

        await test.step('Take screenshot and compare with baseline', async () => {
            await expect(page).toHaveScreenshot('aqa_jenkins_mobile.png', {
                fullPage: true,
                animations: 'disabled',
            });
        });
    });
});
