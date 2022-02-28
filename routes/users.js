const express = require("express"); //Express module
const bcrypt = require("bcrypt"); //Bcrypt module
const { validateUser, UserModel, validateLogin, genToken } = require("../models/userModel"); //import funcs from userModel
const { auth } = require("../middlewares/atuh"); //import funcs from auth to valid token
const router = express.Router(); //to create Route

router.get("/", (req, res) => { //Get request users
    res.json({ msg: "Users work ****" });
})

// A route that will be used to test if the token is still valid or reliable
router.get("/authUser", auth, async(req, res) => {
    res.json({ status: "ok", msg: "token valid" })
})

//A router that will be used to return the user's details
router.get("/userInfo", auth, async(req, res) => {
    try {
        let data = await UserModel.findOne({ _id: req.tokenData._id }, { password: 0 }) //findOne --> Returns one object 
        res.json(data);
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
    // Should return information of name, address
})

// Create a new User
router.post("/", async(req, res) => {
    let validBody = validateUser(req.body); //validation the request of Create user
    if (validBody.error) {
        return res.status(400).json(validBody.error.details);
    }
    try {
        let user = new UserModel(req.body); // create new user from the model by RequestBody(object) 
        //Encryption (bcrypt.hash(user.password, Encryption level))
        user.password = await bcrypt.hash(user.password, 10); //Encryption the password of the user by bcrypt module
        await user.save(); // save the user/object in database
        user.password = "******"; //before send json need to hide the Encryption of the password
        res.status(201).json(user);
    } catch (err) {
        if (err.code == 11000) { // if the email is already (Email Uniqe)
            return res.status(400).json({ code: 11000, err_msg: "Email already in system try log in" })
        }
        console.log(err);
        res.status(500).json(err);
    }
})



//A router that will be used to login user
router.post("/login", async(req, res) => {
    let validBody = validateLogin(req.body); //validation the request of Login user
    if (validBody.error) {
        return res.status(400).json(validBody.error.details);
    }
    try {
        let user = await UserModel.findOne({ email: req.body.email });
        if (!user) {
            return res.status(401).json({ err_msg: "User/email not found in the system" });
        }
        //compatibility passwords between req.body.password to user.password
        let validPassword = await bcrypt.compare(req.body.password, user.password); // compatibility passwords of bcrypt
        if (!validPassword) { //if not compatibility
            return res.status(401).json({ err_msg: "Password worng" });
        }
        // create a token, the token get the user._id
        let token = genToken(user._id)

        res.json({ token }); //res.json({ token }) equal to res.json({ token:token })
        // At the end we will need to send a token to the user
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})

module.exports = router;