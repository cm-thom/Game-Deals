const router = require("express").Router();
const { User } = require('../../models');



router.get('/signup', (req, res) => {
    res.render('signup', {});
})

router.get('/login', (req, res) => {
    res.render('login', {});
})

// Create a new user
router.post("/signup", async (req, res) => {
    try {
        const { username, password, email } = req.body;
        const userData = await User.create({
            username: username,
            password: password,
            email: email
        });
    
        req.session.save(() => {
          req.session.user_id = userData.id;
          req.session.username = userData.username;
          req.session.logged_in = true;
    
          res.status(200).json(userData);
        });
      } catch (err) {
        res.status(400).json(err);
      }
});


router.post('/login', async (req,res) => {
    try{
        const userData = await User.findOne({ where: { email: req.body.email} });
        console.log(req.session);
        if (!userData) {
            res.status(400).json({ message: 'Incorrect email or password, please try again '});
            return;
        }

        const validPassword = await userData.checkPassword(req.body.password);

        if(!validPassword) {
            res.status(400).json({ message: 'Incorrect email or password, please try again' });
            return;
        }

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.username = userData.username;
            req.session.logged_in = true;

            res.json({ user: userData, message: 'You are logged in!' });
        });
    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
        req.session.destory(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

    


module.exports = router;