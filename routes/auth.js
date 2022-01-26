const router = require("express").Router();
const User = require("../models/User");


router.get("/register", async (req, res) => {
    const user = await new User({
        username:"tenzin",
        email:"tenzin@gmail.com",
        password:"123456"
    })

    await user.save();
    res.send("ok");
});

module.exports = router;