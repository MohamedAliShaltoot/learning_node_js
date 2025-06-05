const http = module.require("http");
let users = [
    { id: 1, name: "John", age: 30 },
    { id: 2, name: "Jane", age: 25 },
    { id: 3, name: "Bob" , age: 35},
];

let posts = [
    { id: 1, title: "Post 1", body: "This is post 1" },
    { id: 2, title: "Post 2", body: "This is post 2" },
    { id: 3, title: "Post 3", body: "This is post 3" },
  ];










const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
if(req.url==="/users" && req.method==="GET"){
    console.log(JSON.stringify(users));
    res.end(
        JSON.stringify(users)
      );
}else if (req.url==="/posts" && req.method==="GET"){
    console.log(JSON.stringify(posts));
    res.end(
        JSON.stringify(posts)
      );
}else{
    console.log(JSON.stringify({msg:"no such route"}));
    res.end(
        JSON.stringify({msg:"no such route"})
      );
}



  
});
server.listen(3000, () => console.log("listening on port 3000")); // every application must have a server listening on a port
