import { test } from "@playwright/test";

test("accept cookies and proceed", async ({ page }) => {
  // go to https://www.google.com
  await page.goto("https://www.google.com");

  // pause the automation for 3 seconds
  await page.waitForTimeout(3000);



  // Handle the popup
  page.on('popup', async popup => {
    // Accept cookies
    await popup.waitForSelector('button[text="I agree"]');
    await popup.click('button[text="I agree"]');

    // Close the popup
    await popup.close();
  });

  let searchBox = page.locator("//textarea[@class='gLFyf']");

  // enter "Cydeo" in the search box
  await searchBox.fill("Cydeo");

  // pause the automation for 3 seconds
  await page.waitForTimeout(3000);
});