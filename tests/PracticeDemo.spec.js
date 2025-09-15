const{chromium,test,expect} = require("@playwright/test");

let browser, page;

test("login test with playwright",async()=>{
    browser=await chromium.launch({headless:false});
    const context=await browser.newContext();
    page=await context.newPage();
    await page.goto("https://www.automationexercise.com/");
    await page.locator("a:has-text(' Signup / Login')").click();
    
    await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').fill('ksmulla7393@gmail.com');
    await page.getByRole('textbox',{name:'password'}).fill('employee@123');
    await page.getByRole('button',{name:'Login'}).click();
    await page.locator('li:has-text(" Logged in as Karishma Mulla")').waitFor();
    const ele=await page.locator('a:has-text(" Logged in as Karishma Mulla")').textContent();
    console.log(ele);
    console.log("at end of test");
    await page.pause();
    // await page.close();
    // await browser.close();

});
test.only("frames handling",async()=>{
    browser=await chromium.launch({headless:false});
    const context=await browser.newContext();
    page=await context.newPage();
    await page.goto("https://ui.vision/demo/webtest/frames/");
    const allframes=await page.frames();
    console.log("number of frames",allframes.length);
    //using name or url
    // const frame3=page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'});
    // await frame3.fill('[name="mytext3"]','hello');
    const inputbox=page.frameLocator('frame[src="frame_3.html"]').locator('[name="mytext3"]');
    inputbox.fill('hello');
    await page.waitForTimeout(5000);
});  