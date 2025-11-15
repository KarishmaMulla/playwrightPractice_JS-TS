const{test,expect,chromium}=require('@playwright/test');
let page,browser;

test("first playwright test",async()=>{
browser=await chromium.launch({headless:false});
const context=await browser.newContext();
page=await context.newPage();
await page.goto("https://testautomationpractice.blogspot.com/");
await expect(page).toHaveTitle("Form Elements")
await page.getByRole('link',{name:"PlaywrightPractice"}).click()
await expect(page).toHaveTitle("Automation Testing Practice: PlaywrightPractice")
await expect(page).toHaveURL("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")
await page.pause()
const header=page.getByRole('heading',{hasText:'For Selenium, Cypress & Playwright'})
await expect(header).toBeVisible()
await expect(header).toContainText('For Selenium, Cypress & Playwright')



// await expect(page).toHaveTitle("Learn and Practice Automation | automateNow");
// await page.pause();
// await page.getByRole('link',{name:'File Upload'}).scrollIntoViewIfNeeded();
// await page.getByRole('link',{name:'File Upload'}).click();
// await page.locator('#file-upload').setInputFiles('./tests/UploadFiles/Screenshot 2025-02-13 222339.png');
// await page.getByRole('button',{name:'Upload'}).click();


// await page.getByRole('link', { name: 'File Upload' }).scrollIntoViewIfNeeded();
// await page.getByRole('link', { name: 'File Upload' }).click();
// await page.locator('#file-upload').setInputFiles('./tests/UploadFiles/Screenshot 2025-02-13 222339.png');
// await page.getByRole('button', { name: 'Upload' }).click();
});