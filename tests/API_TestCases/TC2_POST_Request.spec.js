import { test, expect } from '@playwright/test';

test('Create account - multipart/form-data', async ({ request }) => {

  const response = await request.post('https://automationexercise.com/api/createAccount', {
    multipart: {
      name: "Sunna",
      email: "sunna@gmail.com",
      password: "yourPassword123",
      title: "Miss",
      birth_date: "9",
      birth_month: "4",
      birth_year: "2000",
      firstname: "sunny",
      lastname: "shekh",
      company: "cpm pvt ltd",
      address1: "satara",
      address2: "pune",
      country: "india",
      zipcode: "411001",
      state: "Maharashtra",
      city: "Pune",
      mobile_number: "9876543210"
    }
  });

  const body = await response.json();
  console.log(body);

  // API returns: { responseCode: 201, message: "User created!" }
  expect(response.status()).toBe(200);
  expect(body.responseCode).toBe(201);
});