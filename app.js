const path = require("path");
const express = require("express");
const app = express();
const port = 3000;
const hostname = "127.0.0.1";

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./site/index.html"));
});
app.get("/about", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./site/about.html"));
});
app.get("/blog", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./site/blog.html"));
});
app.get("/contact", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./site/contact.html"));
});
app.get("/users/:userID/movies/:moviesID", (req, res) => {
  res.send(`
    <h1> Kullanıcı Adı:${req.params.userID} </h1>
    <h1> Kullanıcı Adı:${req.params.moviesID} </h1>


    `);
});

app.listen(port, hostname, () => {
  console.log(`Server is working, http://${hostname}:${port}/`);
});
