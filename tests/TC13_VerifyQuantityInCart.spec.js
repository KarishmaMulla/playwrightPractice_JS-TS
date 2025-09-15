/*
Test Case 13: Verify Product quantity in Cart
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Click 'View Product' for any product on home page
5. Verify product detail is opened
6. Increase quantity to 4
7. Click 'Add to cart' button
8. Click 'View Cart' button
9. Verify that product is displayed in cart page with exact quantity
*/
const{test,expect,chromium}=require('@playwright/test')
let page,browser
test('VerifyQuantity in cart',async()=>{
    //1. Launch browser
    browser=await chromium.launch({headless:false})
    const context=await browser.newContext()
    page=await context.newPage()

    // 2. Navigate to url 'http://automationexercise.com'
    await page.goto('http://automationexercise.com')

    // 3. Verify that home page is visible successfully
    await expect(page).toHaveTitle("Automation Exercise")

    //4. Click 'View Product' for any product on home page
    await page.locator('.product-image-wrapper .choose').filter({hasText:'View Product'}).nth(2).click()

    //5. Verify product detail is opened
    await page.getByAltText('ecommerce website products').waitFor({state:'visible'})
    await expect(page.getByAltText('ecommerce website products')).toBeVisible()
    await page.pause()
    // 6. Increase quantity to 4
    await page.getByRole('textbox',{name:'quantity'}).click()
});