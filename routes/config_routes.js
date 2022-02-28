const indexR = require("./index"); // create index route
const usersR = require("./users"); // create index users
const carsR = require("./cars"); // create index cars

exports.routesInit = (app) => { // create a function for using routes on the app 
    app.use("/", indexR);
    app.use("/users", usersR);
    app.use("/cars", carsR);

    // If you are writing a rout or a file that does not exist in Public
    // that will display error 404 
    app.use((req, res) => {
        res.status(404).json({ msg_error: "Url not found, 404!" });
    })
}



// Allows a server in another domain to make requests to our server through a browser
exports.corsAccessControl = (app) => {
    app.all('*', (req, res, next) => {
        if (!req.get('Origin')) return next();
        // * -> In reality instead of an asterisk we will enter a domain name that has an access certificate
        // to server
        res.set('Access-Control-Allow-Origin', '*');
        res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, PATCH"); // Allows to get types of requests
        res.set('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type,auth-token,x-api-key');
        next();
    });
}