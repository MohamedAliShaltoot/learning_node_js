const http = module.require("http");
/*
I want to create CRUD Operation
1- get all user | GET 🦾
2- add users | POST 🦾
3- update users | PUT
4- delete users | DELETE

*/
let users = [
  { id: 1, name: "John", email: "mohamed@gmail.com", age: 11 },
  { id: 2, name: "John", email: "ahmed@gmail.com", age: 78},
//   { id: 1, name: "John", email: "hema@gmail.com", age: 44 },
//   { id: 1, name: "John", email: "gwad@gmail.com", age: 30 },
//   { id: 1, name: "John", email: "kamal@gmail.com", age: 21 },
];

// let posts = [
//     { id: 1, title: "Post 1", body: "This is post 1" },
//     { id: 2, title: "Post 2", body: "This is post 2" },
//     { id: 3, title: "Post 3", body: "This is post 3" },
//   ];


const server = http.createServer((req, res) => {
   // 1- get all user | GET
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  const{url,method}=req
if(url==="/users" && method==="GET"){
    //console.log(JSON.stringify(users));
    res.end(
        JSON.stringify(users)
      );
}else if (url === "/users" && method === "POST") {
  res.statusCode = 201;

  req.on("data", (chunk) => {
    let user = JSON.parse(chunk); // add new user
    user.id = users.length + 1; // automatically add id
    users.push(user); // add new user into users list
    res.end(JSON.stringify({ msg: "user added successfully" }));
  });

  //console.log(JSON.stringify(posts));
} else if (url.startsWith("/users/") && method === "PUT") {
  //res.statusCode = 200;
  let urlId = Number(url.split("/")[2]); // to get id from url
  let userIndex = users.findIndex((user) => user.id === urlId);
  if(userIndex == -1){
    res.statusCode = 404;
  return res.end(JSON.stringify({ msg: "user not found", status: false }));
  }
  req.on("data", (chunk) => {
    let user = JSON.parse(chunk); // add new user
   // user.id = users.length + 1; // automatically add id
    users[userIndex].name = user.name;
    users[userIndex].email = user.email;
    users[userIndex].age = user.age;
   users.push(user); // add new user into users list
   res.statusCode = 200;
    res.end(JSON.stringify({ msg: "user updated successfully",status:true }));
});

  //console.log(JSON.stringify(posts));
} else {
  console.log(JSON.stringify({ msg: "no such route" }));
  res.end(JSON.stringify({ msg: "no such route" }));
}



  
});
server.listen(3000, () => console.log("listening on port 3000")); // every application must have a server listening on a port
