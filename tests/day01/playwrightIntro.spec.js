import {test} from '@playwright/test'

test('basic test', async ({page}) => {
    await page.goto("https://www.google.com/");

    await page.waitForTimeout(3000);

    let searchBox = page.locator("//textarea[@class='gLFyf']");

    await searchBox.fill("Playwright Automation");

    //await searchBox.type("Playwright Automation");

    await page.waitForTimeout(3000);
})

