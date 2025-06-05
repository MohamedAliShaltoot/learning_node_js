const http = module.require("http");
var users = [
    { id: 1, name: "John", age: 30 },
    { id: 2, name: "Jane", age: 25 },
    { id: 3, name: "Bob" , age: 35},
];
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(
    JSON.stringify(users)
  );
});
server.listen(3000, () => console.log("listening on port 3000")); // every application must have a server listening on a port
