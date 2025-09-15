const{test,expect,chromium}=require('@playwright/test');
let page,browser;

test("first playwright test",async()=>{
browser=await chromium.launch({headless:false});
const context=await browser.newContext();
page=await context.newPage();
await page.goto("https://practice-automation.com/");
await expect(page).toHaveTitle("Learn and Practice Automation | automateNow");
await page.getByRole('link',{name:'Popups'}).click();

//enabling alert handling/Dialog window handler
page.on('dailog',async dialog=>{
    console.log(`Dialog message: ${dialog.message()}`);
    expect(dialog.type()).toContain('alert');
    expect(dialog.message()).toContain('Hi there, pal!');
       await dialog.accept()});
await page.getByRole('button',{name:'Alert Popup'}).click();
 

//Confirm popup window handler
page.on('dialog',async dialog=>{
expect(dialog.type()).toContain('confirm');
expect(dialog.message()).toContain('OK or Cancel, which will it be?');
await dialog.accept();//close by using OK button
// await dialog.dismiss();//close by cancel button
});
await page.getByRole('button',{name:'Confirm Popup'}).click();
const confirmtext=await page.getByText('OK it is!').textContent();//optional step
console.log(`confirm tesxt after pressing ok/cancel button is ${confirmtext}`);//optional step
await expect(page.locator('p#confirmResult')).toHaveText('OK it is!');
await page.waitForTimeout(5000);



});
test("prompt popup handling",async()=>{
    browser=await chromium.launch({headless:false});
const context=await browser.newContext();
page=await context.newPage();
await page.goto("https://practice-automation.com/");
await expect(page).toHaveTitle("Learn and Practice Automation | automateNow");
await page.getByRole('link',{name:'Popups'}).click();
//Prompt popup
page.on('dialog',async dialog=>{
    expect(dialog.type()).toContain('prompt');
    expect(dialog.message()).toContain("Hi there, what's your name?");
    dialog.accept('karishma');
    });
    await page.getByRole('button',{name:'Prompt Popup'}).click();
    await expect(page.locator('p#promptResult')).toHaveText('Nice to meet you, karishma!');
});