/*
Test Case 1: Register User
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
18. Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
*/
// const { before } = require('node:test')
const {test,expect} =require('@playwright/test')
//  let page,browser


// test('Register User',async({page})=>{
//     await page.goto("http://automationexercise.com")
//     await expect(page).toHaveTitle("Automation Exercise")
//     await expect(page.getByAltText("Website for automation practice")).toBeVisible()

// })


test('Register User',async({page})=>{
    // 1. Launch browser
    // browser=await chromium.launch({headless:false})
    // const context=await browser.newContext()
    // page=await context.newPage()

    //2. Navigate to url 'http://automationexercise.com'
    await page.goto('http://automationexercise.com')   

    //3. Verify that home page is visible successfully
    await expect(page).toHaveTitle("Automation Exercise")
    //4. Click on 'Signup / Login' button
    await page.getByText(' Signup / Login',{exact:true}).click()
    //5. Verify 'New User Signup!' is visible
    await expect(page.getByRole('heading',{name:'New User Signup!'})).toBeVisible()
    //6. Enter name and email address
    await page.getByRole('textbox',{name:"name"}).fill("kashish")
    await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').fill("kashish@1234")
     //7.Click 'Signup' button
    await page.getByRole('button',{name:"Signup"}).click()
     //8.Verify that 'ENTER ACCOUNT INFORMATION' is visible
     const heading2=await page.getByRole('heading',{name:'Enter Account Information'}).isVisible()
     expect(heading2).toBeTruthy()
     //9. Fill details: Title, Name, Email, Password, Date of birth
     await page.getByRole('radio',{name:"Mrs"}).click()
     await expect(page.locator('form').getByRole('textbox', { name: 'Name *', exact: true })).toHaveAttribute('value','kashish')
    await expect(page.getByRole('textbox', { name: 'Email *', exact: true })).toHaveAttribute('value','kashish@1234')
    await page.locator('form').getByRole('textbox', { name: 'Password  *', exact: true }).fill('ksks@111')
    await page.locator('#days').scrollIntoViewIfNeeded()
    await page.selectOption('#days','14')
    await page.selectOption('#months','June')
    await page.selectOption('#years','2020')

// 10. Select checkbox 'Sign up for our newsletter!'
await page.getByText('Sign up for our newsletter!').check()

//11. Select checkbox 'Receive special offers from our partners!'\
await page.getByText('Receive special offers from our partners!').check()

//12. Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
await page.getByRole('textbox',{name:"First name *"}).fill('Kashish')
await page.getByRole('textbox',{name:"Last name *"}).fill('Mulla')
await page.getByLabel("Company", {exact: true }).fill('xyz pvt ltd')
await page.getByRole('textbox',{name:"Address *"}).fill('satara')
await page.getByRole('textbox',{name:"Address 2"}).fill('Azadnagar')
await page.selectOption('#country','India')
await page.getByRole('textbox',{name:"State *"}).fill('Maharashtra')
await page.getByRole('textbox',{name:"City *"}).fill('satara')
await page.locator('#zipcode').fill('454541')
 await page.getByRole('textbox',{name:"Mobile Number *"}).fill('9000454541')
    
//  13. Click 'Create Account button'
await page.getByRole('button',{name:"ate Acc"}).click()

// 14. Verify that 'ACCOUNT CREATED!' is visible
await expect(page.getByText('Account Created!')).toBeVisible()

// 15. Click 'Continue' button
 await page.getByRole('link', { name: 'Continue' }).click();

// 16. Verify that 'Logged in as username' is visible
await page.getByText('Logged in as kashish').click();

// 17. Click 'Delete Account' button
await page.getByRole('link', { name: ' Delete Account' }).click();

// 18. Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
await expect(page.getByText('Account Deleted!')).toBeVisible()
await page.getByRole('link', { name: 'Continue' }).click();
 
    
})