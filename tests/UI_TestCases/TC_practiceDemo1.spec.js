import {test,expect} from "@playwright/test"

/*
Test Case 1: Register User
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Click on 'Signup / Login' button
5. Verify 'New User Signup!' is visible
6. Enter name and email address
7. Click 'Signup' button
8. Verify that 'ENTER ACCOUNT INFORMATION' is visible
9. Fill details: Title, Name, Email, Password, Date of birth
10. Select checkbox 'Sign up for our newsletter!'
11. Select checkbox 'Receive special offers from our partners!'
12. Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
13. Click 'Create Account button'
14. Verify that 'ACCOUNT CREATED!' is visible
15. Click 'Continue' button
16. Verify that 'Logged in as username' is visible
17. Click 'Delete Account' button
18. Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
*/
test('Test Case 1: Register User', async ({ page }) => {

  // 1 & 2: Launch browser and navigate to URL
  await page.goto('http://automationexercise.com');

  // 3: Verify home page is visible
  await expect(page).toHaveURL(/automationexercise/);
  await expect(page.locator('img[alt="Website for automation practice"]')).toBeVisible();

  // 4: Click on 'Signup / Login'
  await page.getByRole('link', { name: 'Signup / Login' }).click();

  // 5: Verify 'New User Signup!' is visible
  await expect(page.getByText('New User Signup!')).toBeVisible();

  // 6: Enter name and email
  const name = 'TestUser';
  const email = `testuser${Date.now()}@mail.com`;

  await page.locator('input[data-qa="signup-name"]').fill(name);
  await page.locator('input[data-qa="signup-email"]').fill(email);

  // 7: Click 'Signup'
  await page.locator('button[data-qa="signup-button"]').click();

  // 8: Verify 'ENTER ACCOUNT INFORMATION'
  await expect(page.getByText('Enter Account Information')).toBeVisible();

  // 9: Fill account details
  await page.locator('#id_gender1').check(); // Title Mr.
  await page.locator('#password').fill('Test@123');
  await page.locator('#days').selectOption('10');
  await page.locator('#months').selectOption('5');
  await page.locator('#years').selectOption('1995');

  // 10 & 11: Select checkboxes
  await page.locator('#newsletter').check();
  await page.locator('#optin').check();

  // 12: Fill address details
  await page.locator('#first_name').fill('Test');
  await page.locator('#last_name').fill('User');
  await page.locator('#company').fill('ABC Company');
  await page.locator('#address1').fill('123 Street');
  await page.locator('#address2').fill('Near Park');
  await page.locator('#country').selectOption('India');
  await page.locator('#state').fill('Karnataka');
  await page.locator('#city').fill('Bangalore');
  await page.locator('#zipcode').fill('560001');
  await page.locator('#mobile_number').fill('9876543210');

  // 13: Click 'Create Account'
  await page.locator('button[data-qa="create-account"]').click();

  // 14: Verify 'ACCOUNT CREATED!'
  await expect(page.getByText('Account Created!')).toBeVisible();

  // 15: Click 'Continue'
  await page.locator('a[data-qa="continue-button"]').click();

  // 16: Verify 'Logged in as username'
  await expect(page.getByText(`Logged in as ${name}`)).toBeVisible();

  // 17: Click 'Delete Account'
  await page.getByRole('link', { name: 'Delete Account' }).click();

  // 18: Verify 'ACCOUNT DELETED!' and click Continue
  await expect(page.getByText('Account Deleted!')).toBeVisible();
  await page.locator('a[data-qa="continue-button"]').click();

});


