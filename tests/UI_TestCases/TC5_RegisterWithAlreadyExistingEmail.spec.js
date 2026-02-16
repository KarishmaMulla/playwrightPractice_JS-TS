/*
Test Case 5: Register User with existing email
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Click on 'Signup / Login' button
5. Verify 'New User Signup!' is visible
6. Enter name and already registered email address
7. Click 'Signup' button
8. Verify error 'Email Address already exist!' is visible
*/
const {test,expect, chromium} =require('playwright/test')
let page,browser

test('Register already existing User',async()=>{
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
    //5. Verify 'New User Signup!' is visible
    const heading=await page.getByRole('heading',{name:'New User Signup!'}).isVisible()
    expect(heading).toBeTruthy()
    //6. Enter name and email address
    await page.getByRole('textbox',{name:"name"}).fill("Karishma")
    await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').fill("ksmulla7393@gmail.com")
     //7.Click 'Signup' button
    await page.getByRole('button',{name:"Signup"}).click()
    // 8. Verify error 'Email Address already exist!' is visible

    await page.locator('form').filter({ hasText: 'Signup' }).getByText('Email Address already exist!').isVisible()

});