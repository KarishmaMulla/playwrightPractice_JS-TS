const{test,expect}=require('@playwright/test')

test('Textbox handling practice_1',async({page})=>{

    await page.goto('https://practice-automation.com/',{waitUntil:'load'})
    await expect(page).toHaveTitle(/Form Fields | Practice Automation/)
    await page.getByRole('link',{name:'Form Fields'}).click()
    await expect(page.locator('h1')).toHaveText('Form Fields')

    //check the checkbox and assert the checks
    await page.getByRole('checkbox',{name:'Water'}).check()
    await expect(page.getByRole('checkbox',{name:'Water'})).toBeChecked()

    //uncheck checkbox and assert the checks
    await page.getByRole('checkbox',{name:'Water'}).uncheck()
    await expect(page.getByRole('checkbox',{name:'Water'})).not.toBeChecked()

    //check all checkboxes and assert the checks
    const len=await page.getByRole('checkbox').count()
    console.log('Total checkboxes are:',len)
    for(let i=0;i<len;i++){
        await page.getByRole('checkbox').nth(i).check()
        await expect(page.getByRole('checkbox').nth(i)).toBeChecked()
    }
    
    //uncheck all checkboxes and assert the checks
    for(let i=0;i<len;i++){
        await page.getByRole('checkbox').nth(i).uncheck()
        await expect(page.getByRole('checkbox').nth(i)).toBeChecked()
    }
     //click checkbox and assert the checks 
     //click:Toggles the checkbox (check/uncheck based on current stat
     await page.getByRole('checkbox',{name:'Water'}).click()
    await expect(page.getByRole('checkbox',{name:'Water'})).toBeChecked()
    
    
})
test('button handling',async({page})=>{
 await page.goto('https://practice-automation.com/',{waitUntil:'load'})
    await expect(page).toHaveTitle(/Form Fields | Practice Automation/)
    //click on button
    await page.getByRole('link',{name:'Form Fields'}).click()
    await expect(page.locator('h1')).toHaveText('Form Fields')
})
test.only('radiobutton handling',async({page})=>{
    await page.goto('https://practice-automation.com/',{waitUntil:'load'})
    await expect(page).toHaveTitle(/Form Fields | Practice Automation/)
    await page.getByRole('link',{name:'Form Fields'}).click()
    await expect(page.locator('h1')).toHaveText('Form Fields')
   
    //select radiobutton and assert
    await page.getByRole('radio',{name:'Red'}).check()
    await expect(page.getByRole('radio',{name:'Red'})).toBeChecked()

    await page.getByLabel('Blue').check()
    await expect(page.getByRole('radio',{name:'Blue'})).toBeChecked()

    //Select all options in a radio group one by one 
    const option=['Red','Blue','Yellow','Green','#FFC0CB']
    for(let value of option){
        await page.check(`input[type="radio"][value='${value}']`)
    }
// await page.getByLabel('Blue').check()
    // 7. Verify only one radio in a group is selected 

const radios = page.locator('input[name="radio"]');  

const count = await radios.count();  

let selectedCount = 0;  

for (let i = 0; i < count; i++) {  

if (await radios.nth(i).isChecked())  

selectedCount++; }  
await page.waitForTimeout(3000)
expect(selectedCount).toBe(1); // Only one should be selected  

 
  
    await page.pause()
});
