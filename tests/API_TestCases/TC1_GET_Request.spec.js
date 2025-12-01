import {test,expect} from "@playwright/test"

test("Get Users",async({request})=>{
const response=await request.get('https://automationexercise.com/api/productsList');
console.log(response);

//get response in JSON format
console.log(await response.json());

//get response body in buffer format
console.log(await response.body());

//get response Headers
console.log(response.headers());

//get response headers array
console.log(response.headersArray());

//get the URL
console.log(response.url());

//get response text
console.log(response.text())


// 1. Verify HTTP status code
const responsestatus=response.status();
expect(responsestatus).toBe(200)

//2.Verify the Status text
const responsestatustext=response.statusText()
expect(responsestatustext).toBe('OK')
expect(response.ok()).toBeTruthy()

// 3.Verify custom responseCode field
const responsjson=await response.json()
const responsecode=responsjson.responseCode;
console.log(responsecode)
expect(responsecode).toBe(200)

// 4.Verify products array exists
//4.1.verify json response should have products property present
expect(responsjson).toHaveProperty("products")

//4.2.verify product array shouldnot be empty
expect(responsjson.products).not.toBe({})

//5.Verify product count is greater than 0
expect(responsjson.products.length).toBeGreaterThan(0)

//6.Verify each product contains required keys
responsjson.products.forEach(p=>{
    expect(p).toHaveProperty("id")
    expect(p).toHaveProperty("name")
    expect(p).toHaveProperty("price")
    expect(p).toHaveProperty("brand")
    expect(p).toHaveProperty("category")
    expect(p.category).toHaveProperty("usertype")
    expect(p.category.usertype).toHaveProperty("usertype")
    expect(p.category).toHaveProperty("category")
});
//7.verify type of each field or Validate datatypes
responsjson.products.forEach(p=>{
    expect(typeof p.id).toBe("number")
    expect(typeof p.name).toBe("string")
    expect(typeof p.price).toBe("string")
    expect(typeof p.brand).toBe("string")
    expect(typeof p.category).toBe("object")
    expect(typeof p.category.usertype).toBe("object")
    expect(typeof p.category.usertype.usertype).toBe("string")
    expect(typeof p.category.category).toBe("string")
  });

  //8.Verify all prices contain 'Rs.'
  responsjson.products.forEach(p=>{
    expect(p.price.includes("RS.")).toBeTruthy()
  })
})
