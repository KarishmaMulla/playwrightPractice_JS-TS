const{test,expect,chromium}=require('@playwright/test');
let page,browser;

test('download the file test demo',async()=>{
    browser=await chromium.launch({headless:false})
    const context=await browser.newContext()
     page=await context.newPage()
     await page.goto('https://practice-automation.com/')
     await page.getByText('File Download').scrollIntoViewIfNeeded()
     await page.getByText('File Download').click()

     const downloadpromise=page.waitForEvent("download")
     await page.getByRole('link',{name:'Download'}).nth(2).click()
     const download=await downloadpromise

     await download.saveAs('./tests/DownloadedFiles/'+download.suggestedFilename())



});
/*
test("first playwright test",async()=>{
browser=await chromium.launch({headless:false});
const context=await browser.newContext();
page=await context.newPage();
await page.goto("https://practice-automation.com/");
await expect(page).toHaveTitle("Learn and Practice Automation | automateNow");
await page.pause();
await page.getByRole('link',{name:'File Download'}).scrollIntoViewIfNeeded();
await page.getByRole('link',{name:'File Download'}).click();

// Start waiting for download before clicking. Note no await.
const downloadPromise = page.waitForEvent('download');
await page.getByRole('link',{name:'Download'}).nth(2).click();
const download = await downloadPromise;

// Wait for the download process to complete and save the downloaded file somewhere.
await download.saveAs('./tests/DownloadedFiles/' + download.suggestedFilename());
await page.pause();
});
*/
