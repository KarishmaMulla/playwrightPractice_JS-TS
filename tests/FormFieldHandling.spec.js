const{test,expect,chromium}=require('@playwright/test');
let page,browser;

test("first playwright test",async()=>{
browser=await chromium.launch({headless:false});
const context=await browser.newContext();
page=await context.newPage();
await page.goto("https://practice-automation.com/");
await expect(page).toHaveTitle("Learn and Practice Automation | automateNow");
await page.getByRole('link',{name:'Form Fields'}).click();
await page.getByTestId('name-input').fill('Karishma');
await page.getByRole('textbox', { name: 'Password' }).fill("karishma567");
// await page.locator("#feedbackForm input[type='password']").fill("karishma567");

//handling checkbox
await page.getByRole('checkbox',{name:'Water'}).check();
await page.getByRole('checkbox',{name:'Coffee'}).check();
await page.getByRole('checkbox',{name:'Ctrl-Alt-Delight'}).check();
console.log(await page.getByRole('checkbox',{name:'Coffee'}).isChecked());
expect(page.getByRole('checkbox',{name:'Coffee'}).isChecked()).toBeTruthy();

await page.getByRole('checkbox',{name:'Coffee'}).uncheck();
console.log(await page.getByRole('checkbox',{name:'Coffee'}).isChecked());

await page.getByLabel('Do you like automation?').scrollIntoViewIfNeeded();
//handling radio btns
await page.getByRole('radio',{name:'Blue'}).click();
await expect(page.getByRole('radio',{name:'Blue'})).toBeChecked();

//handling dropdown
const dropdown=page.getByTestId('automation');
await dropdown.selectOption('yes');




await page.pause();
await page.waitForTimeout(5000);
});
