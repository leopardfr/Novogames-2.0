const http = require('http');
const createBareServer = require("@tomphttp/bare-server-node").createBareServer;
const server = http.createServer();
const express = require("express");
const bare = createBareServer("/bare/");
const app = express();


app.use(express.static(__dirname+"/public/"));


server.on("request", (req, res) => {
  if (bare.shouldRoute(req)) {
    bare.routeRequest(req, res);
  } else {
    app(req, res);
  }
});

server.on("upgrade", (req, socket, head) => {
  if (bare.shouldRoute(req)) {
    bare.routeUpgrade(req, socket, head);
  } else {
    socket.end();
  }
});

server.listen({
  port: 8080,
});

app.get("/", (req, res) => {
  // Check if the URL contains "index.html"
  if (req.url.includes("index.html")) {
    res.redirect('/');
  } else {
    res.sendFile(__dirname + "/public/index.html");
  }
});
app.get("/browser.html", (req, res) => {
  res.redirect('/browser');
});
app.get("/browser", (req, res) => {
  res.sendFile(__dirname + "/public/browser.html");
});
app.get("/about.html", (req, res) => {
  res.redirect('/about');
});
app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/public/about.html");
});