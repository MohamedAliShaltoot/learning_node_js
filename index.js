const http = module.require("http");
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end(
    
  );
});
server.listen(3000, () => console.log("listening on port 3000")); // every application must have a server listening on a port
