/*
Test Case 12: Add Products in Cart
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Click 'Products' button
5. Hover over first product and click 'Add to cart'
6. Click 'Continue Shopping' button
7. Hover over second product and click 'Add to cart'
8. Click 'View Cart' button
9. Verify both products are added to Cart
10. Verify their prices, quantity and total price
*/
const {test,expect,chromium}=require('playwright/test')
let page,browser
test('add product to cart',async()=>{
    // 1. Launch browser
    browser=await chromium.launch({headless:false})
    const context=await browser.newContext()
    page=await context.newPage()

    // 2. Navigate to url 'http://automationexercise.com'
    await page.goto('http://automationexercise.com')

    // 3. Verify that home page is visible successfully
    await expect(page).toHaveTitle("Automation Exercise")

//     4. Click 'Products' button
     await page.getByRole('link',{name:"Products"}).click()

// 5. Hover over first product and click 'Add to cart'
await page.getByAltText('ecommerce website products').first().hover()
//take price of product
const actualproductprice=await page.locator('.product-overlay .overlay-content h2').first().textContent()
await page.locator('.product-overlay .overlay-content .btn').first().click()

// 6. Click 'Continue Shopping' button
await page.getByRole('button',{name:"Continue Shopping"}).click()

// 7. Hover over second product and click 'Add to cart'
await page.getByAltText('ecommerce website products').nth(1).hover()
const actualproductprice2=await page.locator('.product-overlay .overlay-content h2').nth(1).textContent()
await page.locator('.product-overlay .overlay-content .btn').nth(1).click()

// 8. Click 'View Cart' button
await page.getByRole('link',{name:"View Cart"}).click()

// 9. Verify both products are added to Cart
// page.locator("div").filter({ hasText: /Submit/ }); 
await page.getByRole('link',{name:"Blue Top"}).waitFor({state:'visible'})
await page.getByRole('link',{name:"Men Tshirt"}).waitFor({state:'visible'})

await expect(page.getByRole('link',{name:"Blue Top"})).toBeVisible()
await expect(page.getByRole('link',{name:"Men Tshirt"})).toBeVisible()

// 10. Verify their prices, quantity and total price
// await page.pause()
//prices
const cartproduct1price=await page.locator('tr#product-1 > td.cart_price > p').textContent()
const cartproduct2price=await page.locator('tr#product-2 > td.cart_price > p').textContent()
expect(actualproductprice).toBe(cartproduct1price)
expect(actualproductprice).toBe(cartproduct1price)
//quantity
const quantity_product1=await page.locator('tr#product-1 > td.cart_quantity > button').textContent()
const quantity_product2=await page.locator('tr#product-2 > td.cart_quantity > button').textContent()
expect(quantity_product1).toContain('1')
expect(quantity_product2).toContain('1')
//total price
const totalpriceProduct1=await page.locator('tr#product-1 > td.cart_total > p').textContent()
const totalpriceProduct2=await page.locator('tr#product-2 > td.cart_total > p').textContent()
expect(totalpriceProduct1).toBe(cartproduct1price)
expect(totalpriceProduct2).toBe(cartproduct2price)

});