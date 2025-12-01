
import {test,expect} from "@playwright/test"

test("Get Users",async({request})=>{
    const emailToFetch = 'sunna@gmail.com';
const response=await request.get('https://automationexercise.com/api/getUserDetailByEmail',{params:{
    email:emailToFetch}
});
console.log(response);
 const body = await response.json();
  console.log('User detail:', body);
expect(response.status()).toBe(200);
  // Validate something in body — example:
  expect(body.user).toBeDefined();
  expect(body.user.email).toBe(emailToFetch);

});