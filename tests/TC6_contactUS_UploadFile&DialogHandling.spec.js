/*
Test Case 6: Contact Us Form
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Click on 'Contact Us' button
5. Verify 'GET IN TOUCH' is visible
6. Enter name, email, subject and message
7. Upload file
8. Click 'Submit' button
9. Click OK button
10. Verify success message 'Success! Your details have been submitted successfully.' is visible
11. Click 'Home' button and verify that landed to home page successfully
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
    //4. Click on 'Contact Us' button
    await page.getByText(' Contact us',{exact:true}).click()
    // 5. Verify 'GET IN TOUCH' is visible
    await page.getByRole('heading',{name:'Get In Touch'}).isVisible()
   
    // 6. Enter name, email, subject and message
    // await page.locator('form').filter({hasText:"contact-form"}).getByPlaceholder('Name').fill('karishma')
    await page.getByRole('textbox', { name: 'Name' }).fill('Karishma');
     await page.getByRole('textbox', { name: 'Subject' }).fill('automationPrcatice')
    await page.getByRole('textbox', { name: 'Email', exact: true }).fill("ksmulla@gmail.com")
    await page.getByRole('textbox', { name: 'Your Message Here' }).fill("this is best website for practicing automation .thank you")
    // 7. Upload file
    await page.locator('input[name="upload_file"]').setInputFiles('./tests/UploadFiles/Screenshot 2025-02-13 222339.png');
    // 8. Click 'Submit' button
    await page.getByRole('button',{name:"submit"}).click()

    // 9. Click OK button
    //Confirm popup window handler
    page.on('dialog',async dialog=>{
    expect(dialog.type()).toContain('confirm');
    expect(dialog.message()).toContain('Press OK to proceed!');
    await dialog.accept();//close by using OK button
    // await dialog.dismiss();//close by cancel button
    });
    //10. Verify success message 'Success! Your details have been submitted successfully.' is visible
   await page.getByText('Success! Your details have been submitted successfully.').isVisible()

    // 11. Click 'Home' button and verify that landed to home page successfully
   await page.getByText(' Home').click()
    await expect(page).toHaveURL('https://automationexercise.com/')



});