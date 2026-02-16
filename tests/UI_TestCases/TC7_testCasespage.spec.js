/*
Test Case 7: Verify Test Cases Page
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Click on 'Test Cases' button
5. Verify user is navigated to test cases page successfully
*/
const {test,expect,chromium} = require('playwright/test')
let page,browser

test('test cases tab',async()=>{
    //1.launch browser
    browser=await chromium.launch({headless:false})
    const context=await browser.newContext()
    page=await context.newPage()

     //2. Navigate to url 'http://automationexercise.com'
        await page.goto('http://automationexercise.com')   
    
     //3. Verify that home page is visible successfully
        await expect(page).toHaveTitle("Automation Exercise")

    // 4. Click on 'Test Cases' button
        await page.getByRole('link', { name: ' Test Cases' }).click()

//    5. Verify user is navigated to test cases page successfully
       await expect(page).toHaveURL('https://automationexercise.com/test_cases')
       expect(await page.getByRole('heading',{name:'Test Cases',exact:true}).textContent()).toBe('Test Cases')

});