const express = require("express");
const { auth } = require("../middlewares/atuh");
const { CarModel, validateCar } = require("../models/carModel");
const router = express.Router();

router.get("/", async(req, res) => {
    try {
        let perPage = req.query.perPage || 10;
        let page = req.query.page || 1;
        let data = await CarModel.find({})
            .limit(perPage)
            .skip((page - 1) * perPage)
        res.json(data);

    } catch (err) {
        console.log(err);
        res.status(500).json({ msg_err: "There problem in server try again later" })

    }
})

//?s= חיפוש
router.get("/search", async(req, res) => {
    try {
        let searchQ = req.query.s;
        let searchReg = new RegExp(searchQ, "i")
        let data = await CarModel.find({ $or: [{ company: searchReg }, { info: searchReg }] })
            .limit(20)
        res.json(data);
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg_err: "There problem in server try again later" })
    }
})

router.get("/cat/:catname", async(req, res) => {
    try {
        let perPage = req.query.perPage || 10;
        let page = req.query.page || 1;
        let catname = new RegExp(req.params.catname, "i");
        let data = await CarModel.find({ category: catname })
            .limit(perPage)
            .skip((page - 1) * perPage)
        res.json(data);
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg_err: "There problem in server try again later" })
    }

})

router.get('/prices', async(req, res) => {
    try {
        let max = req.query.max || 10000000;
        let min = req.query.min || 0
        let data = await CarModel.find({ $and: [{ price: { $lte: max } }, { price: { $gte: min } }] });
        if (max >= min) {
            res.json(data)
        } else {
            res.json({ msg: "Try again the maximum is smaller than the minimum " })

        }
    } catch (err) {
        console.log(err);
    }

})


//need token
router.post("/", auth, async(req, res) => {
    let validBody = validateCar(req.body);
    if (validBody.error) {
        return res.status(400).json(validBody.error.details);
    }

    try {
        let car = new CarModel(req.body);
        car.user_id = req.tokenData._id;
        await car.save();
        res.status(201).json(car);

    } catch (err) {
        console.log(err);
    }
})

//need token
router.put("/:editId", auth, async(req, res) => {
    let validBody = validateCar(req.body);
    if (validBody.error) {
        return res.status(400).json(validBody.error.details);
    }
    try {
        let editId = req.params.editId;
        let data = await CarModel.updateOne({ _id: editId, user_id: req.tokenData._id }, req.body);

        // modfiedCount:1 - if sucsses
        res.json(data)
    } catch (err) {
        console.log(err);
    }
})

//need token
router.delete("/:delID", auth, async(req, res) => {
    try {
        let delID = req.params.delID;
        let data = await CarModel.deleteOne({ _id: delID, user_id: req.tokenData._id });
        // countDelted: 1 - if sucsses
        res.json(data);
    } catch (err) {
        console.log(err);
    }
})







module.exports = router;