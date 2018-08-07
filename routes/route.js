const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const config = require('../config/database');
//retrieving user
router.get('/show', (req, res, next) => {
    // res.send('Retrieving Data');
    User.find((err, users) => {
        if (err)
            return res.status(500).send(err);
        return res.status(200).send(users);
    })
});

//check whether email already registered
router.get('/check/:email', (req, res, next) => {
    User.findOne({ 'email': req.params.email }, (err, user) => {
        if (err) {
            return res.status(501).send(err);
        }
        return res.status(200).send(user);
    })
});

router.get('/checkAdmin/:email',(req,res,next)=>{
    User.findOne({'email':req.params.email,'role':"admin"},(err,user)=>{
        if(err)
        {
            throw err;
        }
        else
        {   
            res.send(user);
        }
    })
});

//authentication
router.post('/authentication', (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    User.getUserByUsername(email, (err, user) => {
        if (err)
            throw err;
        if (!user)
            return res.json({ success: false, msg: "user not found" });
        User.comparePassword(password, user.password, (err, isMatch) => {
            if (err)
                throw err;
            if (isMatch) {
                const token = jwt.sign(user.toJSON(), config.secret, {
                    expiresIn: 604800 //week
                });
                res.json({
                    success: true,
                    token: "JWT " + token,
                    user: {
                        _id: user._id,
                        first_name: user.first_name,
                        email: user.email,
                        last_name:user.last_name,
                        model:user.role,
                        interestedIn:user.interestedIn,
                        address:user.address,
                        bought:user.bought
                    }
                });
            }
            else {
                return res.json({ success: false, msg: "Wrong password" });
            }
        });
    });
});

router.get('/profile',passport.authenticate('jwt',{session:false}),(req,res,next)=>{
    res.json(req.user);
})
//adduser
router.post('/addUser', (req, res, next) => {
    //logic to add user
    let newUser = new User({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password,
    });
    User.addUser(newUser, (err, user) => {
        if (err)
            res.json({ success: false, msg: 'Failed to register User' });
        else
            res.json({ success: true, msg: "User successfully registered" });
    });
});

//add item to cart for user
router.put('/addCart/:id/:product',(req,res,next)=>{
    User.update({_id:req.params.id},{$push:{interestedIn:req.params.product}},(err,data)=>{
        if(err)
        return res.json(err);
        else
        return res.json(data);
    });
})
//delete User
router.delete('/delUser', (req, res, next) => {
    //logic to delete user
})
module.exports = router;