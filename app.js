const express = require("express"); //Express 
const path = require("path"); //To Perform manipulations on folders & files
const http = require("http");
setInterval(function() {
    http.get("https://project-yarin.herokuapp.com/");
}, 300000);

const { routesInit, corsAccessControl } = require("./routes/config_routes"); // import routesInit() & corsAccessControl()
require("./db/mongoConnect"); // Links the mongo to app


const app = express(); // app of express        

app.use(express.json()); // app of jsons
app.use(express.static(path.join(__dirname, "public")));

corsAccessControl(app);
routesInit(app);


const server = http.createServer(app);
let port = process.env.PORT || "3000";
server.listen(port);