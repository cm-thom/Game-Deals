const router = require("express").Router();
const { User } = require('../../models');



// localhost:3001/users
router.get('/', (req, res) => {
    res.json("From the user folder!");
})


router.post("/sign-up", async (req, res) => {
    const { username, password, email } = req.body;
    const userData = await User.create({
        username: username,
        password: password,
        email: email
    });

    res.json(userData);
})


module.exports = router;