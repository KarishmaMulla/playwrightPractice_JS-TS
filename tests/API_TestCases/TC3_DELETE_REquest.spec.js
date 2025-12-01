import {test,expect} from "@playwright/test"
//these API accepts only form data so we used multipart form data in below example
test('DELETE Request to delete user account',async({request})=>{

    const payload={
       email: "sunna@gmail.com",
      password: "yourPassword123"
    };
    const response=await request.delete("https://automationexercise.com/api/deleteAccount",{multipart: payload
  });

const body = await response.json();
  console.log(body);
 expect(response.status()).toBe(200);
 expect(body.responseCode).toBe(200);
 
expect(body.message).toContain("Account deleted!");

})

 
