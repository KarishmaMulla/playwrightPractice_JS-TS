import{test,expect} from "@playwright/test"
test("POST request-Verify Login with Valid Credentials",async({request})=>{
    const response=await request.post("https://automationexercise.com/api/verifyLogin",{multipart:
        {
        //   email: "sunna@gmail.com",
      password: "yourPassword123"
        }
    });
    const body = await response.json();
  console.log(body);
//  expect(response.status()).toBe(200);
 expect(body.responseCode).toBe(400);
 
expect(body.message).toContain("Bad request, email or password parameter is missing in POST request.");
})