const express = require('express');
const router = express.Router();

const User = require('../models/user');

//retrieving user
router.get('/show', (req, res, next) => {
    // res.send('Retrieving Data');
    User.find((err, users) => {
        if(err)
        return res.status(500).send(err);
        return res.status(200).send(users);
    })
});

//check whether email already registered
router.get('/check/:email',(req,res,next)=>{
    User.findOne({'email':req.params.email},(err,user)=>{
        if(err)
        {
        return res.status(501).send(err);
        }
        return res.status(200).send(user);
    })
});

//authentication
router.get('/auth/:email/:pwd',(req,res,next)=>{
    User.findOne({'email':req.params.email,'password':req.params.pwd},(err,user)=>{
        if(err)
            return res.status(500).send(err);
            return res.status(200).send(user);
    })
});
//adduser
router.post('/addUser', (req, res, next) => {
    //logic to add user
    let newUser = new User({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password,
    });

    newUser.save((err, user) => {
        if (err) 
            return res.status(500).send(err);
            return res.status(200).send(user);
    });
});

//delete User
router.delete('/delUser', (req, res, next) => {
    //logic to delete user
})
module.exports = router;