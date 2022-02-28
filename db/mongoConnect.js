const mongoose = require('mongoose'); //connect to mongoose module
const { config } = require('../config/secret'); //get props(object) about user&pass MongoDB Atlas ,secretForToken

main().catch(err => console.log(err)); //Error Message if not working the connect

async function main() { //connect Data Base from Mongo Atlas by user & password 
    await mongoose.connect(`mongodb+srv://${config.userMongo}:${config.passMongo}@cluster0.ym3ax.mongodb.net/projectOfer`); //(feb22 == name DataBase)
    console.log("Mongo Atlas connect...") //print--> Mongo is Working
}