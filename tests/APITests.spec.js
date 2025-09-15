const{test,expect}=require('@playwright/test');
var userid;
test("Get Users",async({request})=>{
const response=await request.get('https://reqres.in/api/users?page=2');
console.log(await response.json());
expect(response.ok()).toBeTruthy();
expect(response.status()).toBe(200);
})

test("Create User",async({request})=>{
    const response=await request.post('https://reqres.in/api/users',
    {
        data:{"name":"Karishma","job": "Engineer"},
        header:{"Accept":"application/json"}
    });
    console.log(await response.json());
    console.log("post request");
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(201);
    var res=response.json();
    userid=res.id;

})
test("Update user",async({request})=>{
    const response=await request.put('https://reqres.in/api/users/'+userid,
        {
            data:{"name":"Karishma","job": "Engineer"},
            header:{"Accept":"application/json"}
        });
        console.log(await response.json());
        console.log("put request")
        expect(response.ok()).toBeTruthy();
        expect(response.status()).toBe(200);
})
test("delete user",async({request})=>{
    const response=await request.delete('https://reqres.in/api/users/'+userid);
    expect((response).status()).toBe(204);

})