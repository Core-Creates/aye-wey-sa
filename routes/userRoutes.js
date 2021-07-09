const router = require('express').Router();
const { User } = require('../models');
const wAuth = require('../utils/auth');


router.post('/login', async (req, res) => {
    try {
      const userData = await User.findOne({
        where: {
          email: req.body.email,
        }
      });
  
      if (!userData) {
        res.status(400).json({ message: 'No user account found!' });
        return;
  
      }
      const validPassword = await userData.checkPassword(req.body.password);
  
      if (!validPassword) {
        res.status(400).json({ message: 'No user account found!' });
        return;
      }
  
      req.session.save(() => {
        req.session.userId = userData.id;
        req.session.email = userData.email;
        req.session.loggedIn = true;
        res.json({ user: userData, message: 'Successful log in!' })
      });
    } catch (err) {
      res.status(400).json(err);
    }
  
  });