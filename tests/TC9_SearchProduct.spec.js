/*
Test Case 9: Search Product
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Click on 'Products' button
5. Verify user is navigated to ALL PRODUCTS page successfully
6. Enter product name in search input and click search button
7. Verify 'SEARCHED PRODUCTS' is visible
8. Verify all the products related to search are visible
*/

const {test,expect,chromium}=require('playwright/test')
let page,browser
test('verify all product and product details page',async()=>{
    // 1. Launch browser
    browser=await chromium.launch({headless:false})
    const context=await browser.newContext()
    page=await context.newPage()

    // 2. Navigate to url 'http://automationexercise.com'
    await page.goto('http://automationexercise.com')

    // 3. Verify that home page is visible successfully
    await expect(page).toHaveTitle("Automation Exercise")

    // 4. Click on 'Products' button
    await page.getByRole('link',{name:' Products'}).click()

    // 5. Verify user is navigated to ALL PRODUCTS page successfully
    await expect(page).toHaveURL('https://automationexercise.com/products')
    expect(await page.getByRole('heading',{name:'All Products',exact:true}).textContent()).toBe('All Products')

    //6. Enter product name in search input and click search button
    await page.getByRole('textbox',{name:"search"}).fill('winter top')
    await page.locator('#submit_search').click()

//7. Verify 'SEARCHED PRODUCTS' is visible
    await expect(page.getByRole('heading',{name:"Searched Products"})).toBeVisible()

    // 8. Verify all the products related to search are visible
    
     await page.pause()
});