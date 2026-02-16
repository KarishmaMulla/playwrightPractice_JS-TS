/*Test Case 15: Place Order: Register before Checkout
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Click 'Signup / Login' button
5. Fill all details in Signup and create account
6. Verify 'ACCOUNT CREATED!' and click 'Continue' button
7. Verify ' Logged in as username' at top
8. Add products to cart
9. Click 'Cart' button
10. Verify that cart page is displayed
11. Click Proceed To Checkout
12. Verify Address Details and Review Your Order
13. Enter description in comment text area and click 'Place Order'
14. Enter payment details: Name on Card, Card Number, CVC, Expiration date
15. Click 'Pay and Confirm Order' button
16. Verify success message 'Your order has been placed successfully!'
17. Click 'Delete Account' button
18. Verify 'ACCOUNT DELETED!' and click 'Continue' button
*/

import {test,expect,chromium} from '@playwright/test'
let page,browser
test('place the order while checkout',async()=>{
    //1. Launch browser
    browser=await chromium.launch({headless:false})
    const context=await browser.newContext()
    page=await context.newPage()

    // 2. Navigate to url 'http://automationexercise.com'
     
await page.goto('http://automationexercise.com')

    // 3. Verify that home page is visible successfully
    await expect(page).toHaveTitle(/Automation Exercise/)
    await expect(page.getByAltText('Website for automation practice')).toBeVisible()
    
//    4. Click 'Signup / Login' button

    await page.getByText(' Signup / Login').click();
    await expect(page.getByRole('heading', { name: 'New User Signup!' })).toBeVisible()

    // / 5. Fill all details in Signup and create account
     await page.getByRole('textbox',{name:"name"}).fill("kashish4")
    await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').fill("kashish4@1234")
    await page.getByRole('button', { name: 'Signup' }).click();
    await expect(page.getByRole('heading',{name:'Enter Account Information'})).toBeVisible()
      //Fill details: Title, Name, Email, Password, Date of birth
     await page.getByRole('radio',{name:"Mrs"}).click()
     await expect(page.locator('form').getByRole('textbox', { name: 'Name *', exact: true })).toHaveAttribute('value','kashish4')
    await expect(page.getByRole('textbox', { name: 'Email *', exact: true })).toHaveAttribute('value','kashish4@1234')
    await page.locator('form').getByRole('textbox', { name: 'Password  *', exact: true }).fill('ksks@111')
    await page.locator('#days').scrollIntoViewIfNeeded()
    await page.selectOption('#days','14')
    await page.selectOption('#months','June')
    await page.selectOption('#years','2020')
//  Select checkbox 'Sign up for our newsletter!'
await page.getByText('Sign up for our newsletter!').check()

//Select checkbox 'Receive special offers from our partners!'\
await page.getByText('Receive special offers from our partners!').check()

// Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
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
    
//   Click 'Create Account button'
await page.getByRole('button',{name:"ate Acc"}).click()

// 6. Verify 'ACCOUNT CREATED!' and click 'Continue' button
await expect(page.getByText('Account Created!')).toBeVisible()
await page.getByRole('link', { name: 'Continue' }).click();

// 7. Verify that 'Logged in as username' is visible
await expect(page.getByText('Logged in as kashish')).toBeVisible()

// await page.pause()
//8.add product to cart
await expect(page.getByRole('link', { name: 'Website for automation' })).toBeVisible();


  await page.getByText('Add to cart').nth(1).click();
  await expect(page.getByRole('heading', { name: 'Added!' })).toBeVisible();

//   await page.locator('#cartModal').click();
//   await page.getByRole('button', { name: 'Continue Shopping' }).click();
//   await page.getByText('Add to cart').nth(5).click();
//   await expect(page.getByRole('heading', { name: 'Added!' })).toBeVisible();

  await page.getByRole('button', { name: 'Continue Shopping' }).click();
  await page.getByRole('link', { name: ' Cart' }).click();
  await expect(page.getByRole('row', { name: 'Product Image Blue Top Women' })).toBeVisible();

  await page.getByText('Shopping Cart').click();
  await expect(page.locator('#do_action')).toContainText('Proceed To Checkout');
  await page.getByText('Proceed To Checkout').click();
  await expect(page.getByRole('row', { name: 'Product Image Blue Top Women' })).toBeVisible();

  await page.locator('textarea[name="message"]').click();
  await page.locator('textarea[name="message"]').fill('amazing website');
  await page.getByRole('link', { name: 'Place Order' }).click();
  await expect(page.getByRole('link', { name: 'Website for automation' })).toBeVisible();

  await page.locator('input[name="name_on_card"]').click();
  await page.locator('input[name="name_on_card"]').fill('kashish');
  await page.locator('input[name="card_number"]').click();
  await page.locator('input[name="card_number"]').fill('12121212121');
  await page.getByRole('textbox', { name: 'ex.' }).click();
  await page.getByRole('textbox', { name: 'ex.' }).fill('322');
  await page.getByRole('textbox', { name: 'MM' }).click();
  await page.getByRole('textbox', { name: 'MM' }).fill('12');
  await page.getByRole('textbox', { name: 'YYYY' }).click();
  await page.getByRole('textbox', { name: 'YYYY' }).fill('2034');
  await page.getByRole('button', { name: 'Pay and Confirm Order' }).click();
  await expect(page.getByRole('link', { name: 'Automation Exercise website' })).toBeVisible();

  await page.getByText('Congratulations! Your order').click();
  await page.getByRole('link', { name: 'Continue' }).click();

// . Click 'Delete Account' button
await page.getByRole('link', { name: ' Delete Account' }).click();

//  Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
await expect(page.getByText('Account Deleted!')).toBeVisible()
await page.getByRole('link', { name: 'Continue' }).click();

});