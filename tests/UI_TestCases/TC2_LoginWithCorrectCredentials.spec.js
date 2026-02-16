/*
Test Case 2: Login User with correct email and password
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Click on 'Signup / Login' button
5. Verify 'Login to your account' is visible
6. Enter correct email address and password
7. Click 'login' button
8. Verify that 'Logged in as username' is visible
9. Click 'Delete Account' button
10. Verify that 'ACCOUNT DELETED!' is visible
*/
const {test,expect, chromium} =require('playwright/test')
let page,browser
test('Login with correct credentials',async()=>{
    // 1. Launch browser
    browser=await chromium.launch({headless:false})
    const context=await browser.newContext()
    page=await context.newPage()

    //2. Navigate to url 'http://automationexercise.com'
    await page.goto('http://automationexercise.com')   

    //3. Verify that home page is visible successfully
    await expect(page).toHaveTitle("Automation Exercise")
    //4. Click on 'Signup / Login' button
    await page.getByText(' Signup / Login',{exact:true}).click()
    //5. Verify 'Login to your account' is visible
    const heading=await page.getByRole('heading',{name:'Login to your account'}).isVisible()
    expect(heading).toBeTruthy()
    //6. Enter correct email address and password
     
    await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').fill("ksmulla7393@gmail.com")
    await page.getByRole('textbox', { name: 'Password' }).fill("employee@123")

    //   7. Click 'login' button
    await page.getByRole('button', { name: 'Login' }).click();

    // 8. Verify that 'Logged in as username' is visible
    await page.getByText('Logged in as Karishma Mulla').isVisible()
    await page.getByRole('link', { name: ' Logout' }).click();
});