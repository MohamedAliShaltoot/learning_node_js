const http = module.require("http");
const fs = module.require("fs");

/*
* I want to create CRUD Operation
! 1- get all user | GET 🦾
? 2- add users | POST 🦾
* params 3- update users | PUT
* 4- delete users | DELETE

*/

let users = JSON.parse(fs.readFileSync("users.json", "utf-8")); //* read json content then convert it to object


const server = http.createServer((req, res) => {
  const sendResponse = (code, msg) => {
    res.statusCode = code;

    return res.end(JSON.stringify(msg));
  };

  res.setHeader("Content-Type", "application/json");
  const { url, method } = req;
  //? 1- get all user | GET
  if (url === "/users" && method === "GET") {
    sendResponse(200, users);

    //!  2- add users | POST 🦾
  } else if (url === "/users" && method === "POST") {
    res.statusCode = 201;

    req.on("data", (chunk) => {
      let user = JSON.parse(chunk); //? converts json to object to store it in users objects
      user.id = users.length + 1; // automatically add id
      users.push(user); // add new user into users list
      fs.writeFileSync("users.json", JSON.stringify(users));
      sendResponse(201, { msg: "user added successfully" });
    });

    //*  3- update users | PUT
  } else if (url.startsWith("/users/") && method === "PUT") {
    //res.statusCode = 200;
    let urlId = Number(url.split("/")[2]); // to get id from url
    let userIndex = users.findIndex((user) => user.id === urlId);
    if (userIndex == -1) {
      sendResponse(404, { msg: "user not found", status: false });
    }
    req.on("data", (chunk) => {
      let user = JSON.parse(chunk); // add new user

      users[userIndex].name = user.name;
      users[userIndex].email = user.email;
      users[userIndex].age = user.age;
      fs.writeFileSync("users.json", JSON.stringify(users));
      //here i want to replace the old user with the new user

      // users.push(user); // add new user into users list
      // why i commented this line because i want to replace the
      //  old user with the new user not push a new user and edit old user
      sendResponse(200, { msg: "user updated successfully", status: true });
    });

    //4- delete users | DELETE
  } else if (url.startsWith("/users/") && method === "DELETE") {
    //res.statusCode = 200;
    let urlId = Number(url.split("/")[2]); // to get id from url
    let userIndex = users.findIndex((user) => user.id === urlId);
    if (userIndex == -1) {
      sendResponse(404, { msg: "user not found", status: false });
    }

    users.splice(userIndex, 1); // delete user start from index and take 1 only
    fs.writeFileSync("users.json", JSON.stringify(users));
    sendResponse(200, { msg: "user deleted successfully", status: true });
  } else {
    console.log(JSON.stringify({ msg: "no such route" }));
    sendResponse(200, { msg: "no such route" });
  }
});
server.listen(3000, () => console.log("listening on port 3000")); // every application must have a server listening on a port
