import { test, expect } from '@playwright/test';

test('Update user account via API', async ({ request }) => {
  const response = await request.put('https://automationexercise.com/api/updateAccount', {
    multipart: {
      name: "Sunna Updated",
      email: "sunna@gmail.com",
      password: "yourPassword123",
      title: "Miss",
      birth_date: "10",
      birth_month: "5",
      birth_year: "2001",
      firstname: "SunnyUpdated",
      lastname: "ShekhUpdated",
      company: "CPM Pvt Ltd Updated",
      address1: "Satara Updated",
      address2: "Pune Updated",
      country: "India",
      zipcode: "411002",
      state: "Maharashtra",
      city: "Pune",
      mobile_number: "9876543211"
    }
  });

  const body = await response.json();
  console.log('Update response:', body);

  expect(response.status()).toBe(200);
  expect(body.responseCode).toBe(200);
  expect(body.message).toContain('User updated');
});