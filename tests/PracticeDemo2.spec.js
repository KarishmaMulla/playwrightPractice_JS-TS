const{test,expect,chromium}=require('@playwright/test');
const { text } = require('stream/consumers');
let page,browser;
test("register new user",async()=>{
    browser=await chromium.launch({headless:false});
    const context=await browser.newContext();
    page=await context.newPage();
    await page.goto("http://automationexercise.com");
    await expect(page).toHaveTitle("Automation Exercise");
    await page.locator("a:has-text(' Signup / Login')").click();
    const newusersignuptext=await page.getByRole('heading',{name:'New User Signup!'});
    await expect(newusersignuptext).toHaveText("New User Signup!");
    await page.getByRole('textbox', { name: 'name' }).fill("karishmmma");
    await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').fill("ksmulla77@gmail.com");
    
    await page.getByRole('button', { name: 'Signup' }).click();
    await page.waitForLoadState('networkidle');
    // await page.pause();
    const textverify=await page.getByText("Enter Account Information");
    console.log(textverify);
    await expect(textverify).toHaveText("Enter Account Information");
    const isvisibletext=await page.getByText("Enter Account Information").isVisible();
    expect(isvisibletext).toBeTruthy();

    await page.getByRole('radio',{name:"Mrs."}).check();
    await page.getByRole('textbox',{name:"password"}).fill("abc@123");
    await page.locator('#days').selectOption('25');
    await page.locator('#months').selectOption('2');
    await page.locator('#years').selectOption('2021');
    await page.getByRole('checkbox',{name:'Sign up for our newsletter!'}).check();
    await page.getByRole('checkbox',{name:'Receive special offers from our partners!'}).check();
    await page.evaluate(() => window.scrollTo(0,document.body.scrollHeight));
    // await page.getByRole('textbox',{name:"password"}).scrollIntoViewIfNeeded();
    // await page.waitForTimeout(5000)
    // await page.getByRole('textbox',{name:'first_name'}).fill("karishmaaa");
    // await page.getByRole('textbox',{name:'first_name'}).scrollIntoViewIfNeeded();
    await page.waitForTimeout(5000)
//     await page.evaluate(() => window.scrollTo(0,document.body.scrollHeight));
//    await page.waitForTimeout(5000)

    await page.pause();


   

});
/*await page.getByText('Enter Account Information').click();
  await page.getByRole('radio', { name: 'Mr.' }).check();
  await page.getByRole('textbox', { name: 'Name *', exact: true }).click();
  await page.locator('#form').click();
  await page.getByRole('textbox', { name: 'Password *' }).click();
  await page.locator('#days').selectOption('25');
  await page.locator('#months').selectOption('2');
  await page.locator('#years').selectOption('2021');
  await page.getByRole('checkbox', { name: 'Sign up for our newsletter!' }).check();
  await page.getByRole('checkbox', { name: 'Receive special offers from' }).check();
  await page.locator('#form').click();
  await page.locator('#form').click();
  await page.locator('div').filter({ hasText: 'Enter Account Information' }).nth(1).click();


*/
/*Test Case 1: Register User
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Click on 'Signup / Login' button
5. Verify 'New User Signup!' is visible
6. Enter name and email address
7. Click 'Signup' button
8. Verify that 'ENTER ACCOUNT INFORMATION' is visible
9. Fill details: Title, Name, Email, Password, Date of birth
10. Select checkbox 'Sign up for our newsletter!'
11. Select checkbox 'Receive special offers from our partners!'
12. Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
13. Click 'Create Account button'
14. Verify that 'ACCOUNT CREATED!' is visible
15. Click 'Continue' button
16. Verify that 'Logged in as username' is visible
17. Click 'Delete Account' button
18. Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button*/