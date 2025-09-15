/*
Test Case 8: Verify All Products and product detail page
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Click on 'Products' button
5. Verify user is navigated to ALL PRODUCTS page successfully
6. The products list is visible
7. Click on 'View Product' of first product
8. User is landed to product detail page
9. Verify that detail detail is visible: product name, category, price, availability, condition, brand8
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

    // 6. The products list is visible
    await page.locator('.col-sm-4').locator('.product-image-wrapper').first().waitFor()
   const listofallproducts=await page.locator('.col-sm-4').locator('.product-image-wrapper').all()
   for(const product of listofallproducts){
    await expect(product).toBeVisible()
   }
   
   //// 7. Click on 'View Product' of first product
      await page.locator('.choose > .nav > li > a').first().click()

    //   8. User is landed to product detail page
    await expect(page).toHaveURL('https://automationexercise.com/product_details/1')
    await expect(page).toHaveTitle("Automation Exercise - Product Details") 

     

      // 9. Verify that detail detail is visible: product name, category, price, availability, condition, brand
          await expect(page.getByRole('heading',{name:"Blue Top"})).toBeVisible()
          await expect(page.getByText('Category: Women > Tops')).toBeVisible()
          await expect(page.getByText("Rs. 500")).toBeVisible()
          await expect(page.getByText("Availability: In Stock",{exact:true})).toBeVisible()
         await expect(page.getByText("Condition: New",{exact:true})).toBeVisible()
         await expect(page.getByText("Brand: Polo",{exact:true})).toBeVisible()
        
});