const jwt = require("jsonwebtoken"); //call to jsonwebtoken module
const { config } = require("../config/secret");


exports.auth = (req, res, next) => {
    // if token sent
    let token = req.header("auth-token"); //get token from request
    if (!token) { //If the token does not exist from the url endpoint 
        return res.status(401).json({ err_msg: "need to send token to his endpoint url" })
    }
    try {
        // check if token is expired or token exists (jwt.verify(token,SecretWord))
        let decodeToken = jwt.verify(token, `${config.tokenSecret}`); //Token authentication
        // Produces a property within the empty parameter that is the same
        // For all the functions in the routing of the rout
        req.tokenData = decodeToken; //(req) --> Global memory from middleware function to route
        // (Next) says the function has finished its function and can be passed
        // to the next function in the routs
        next()
    } catch (err) { // catch if token invalid or expired
        return res.status(401).json({ err_msg: "Token invalid or expired" })
    }
}