const{test,expect}=require('@playwright/test')

test('Textbox handling practice_1',async({page})=>{

    await page.goto('https://practice-automation.com/',{waitUntil:'load'})
    await expect(page).toHaveTitle(/Form Fields | Practice Automation/)
    await page.getByRole('link',{name:'Form Fields'}).click()
    await expect(page.locator('h1')).toHaveText('Form Fields')
        await page.pause()
   //fill textbox
    await page.getByTestId('name-input').fill('Karishmaa')
    
    //clear text from text box
    await page.getByTestId('name-input').clear()

    //fill text textbox again
     await page.getByTestId('name-input').fill('Karishma')

     //get textbox value
     console.log(await page.getByTestId('name-input').inputValue())
     
     //assertion with textbox value
     await expect(page.getByTestId('name-input')).toHaveValue('Karishma')

     //keyboard actions
     await page.getByTestId('name-input').click()
     await page.getByTestId('name-input').press('Control+A')
     await page.getByTestId('name-input').press('Delete')
    await page.getByTestId('name-input').press('Tab')
     
    await page.getByLabel('Password ').fill('karishma222')
    await page.getByTitle('No fake emails!').scrollIntoViewIfNeeded()
    
    await page.getByTitle('No fake emails!').fill('kssk@gmail.com')
    await page.getByTestId('message').fill('This is demo message')
  
    await page.close()


})