const mongoose = require("mongoose");
const Joi = require("joi");

let carSchema = new mongoose.Schema({
    company: String,
    model: String,
    year: Number,
    category: String,
    price: Number,
    color: String,
    info: String,
    img_url: String,
    // will contain the ID from the user's collection
    // who added the cake
    user_id: String,
    date_created: {
        type: Date,
        default: Date.now()
    }
})
exports.CarModel = mongoose.model("cars", carSchema);

exports.validateCar = (_reqBody) => {
    let joiSchema = Joi.object({
        company: Joi.string().min(2).max(99).required(),
        model: Joi.string().min(2).max(99).required(),
        year: Joi.number().min(1900).max(2100).required(),
        category: Joi.string().min(2).max(99).required(),
        price: Joi.number().min(2).max(10000000).required(),
        color: Joi.string().min(3).max(500).allow(null, ""),
        info: Joi.string().min(3).max(500).allow(null, ""),
        img_url: Joi.string().min(3).max(500).allow(null, "")
    })
    return joiSchema.validate(_reqBody)
}