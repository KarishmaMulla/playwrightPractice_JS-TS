/*Test Case 11: Verify Subscription in Cart page
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Click 'Cart' button
5. Scroll down to footer
6. Verify text 'SUBSCRIPTION'
7. Enter email address in input and click arrow button
8. Verify success message 'You have been successfully subscribed!' is visible
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

    // 4. Click 'Cart' button
    await page.getByRole('link',{name:' Cart'}).click()

    // 5. Scroll down to footer
    await page.evaluate(()=>{
        window.scrollTo(0,document.body.scrollHeight)
    });
// 5. Verify text 'SUBSCRIPTION'
    const subscription=await page.getByRole('heading',{name:"Subscription"}).textContent()
     expect(subscription).toBe('Subscription')
// 6. Enter email address in input and click arrow button
    await page.locator('#susbscribe_email').fill('ksmulla@gmail.com')
    await page.locator('#subscribe').click()

// 7. Verify success message 'You have been successfully subscribed!' is visible
    await page.getByText('You have been successfully').isVisible()
    await page.pause()
});
