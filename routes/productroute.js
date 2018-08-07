const express = require('express');
const router = express.Router();
const Product = require("../models/product");
//method for retrieving data
router.get('/getProduct', (req, res, next) => {
    // res.send('Retrieving Data');
    Product.find((err, product) => {
        if (err)
            return res.status(500).send(err);
            return res.status(200).send(product);
    })
});

//method for retrieving data for particular id when clicked
router.get('/getItem/:id',(req,res,next)=>{
    // console.log(req.params.id);
    Product.findById(req.params.id,(err,product)=>{
        if(err)
            return res.status(500).send(err);
            return res.status(200).send(product);
    });
})
//method to post 
router.post('/addProduct', (req, res, next) => {
    let newProduct = new Product({
        model_name: req.body.model_name,
        company: req.body.company,
        image:req.body.image,
        stock: req.body.stock,
        screen_size: req.body.screen_size,
        ram: req.body.ram,
        rom: req.body.rom,
        memory: req.body.memory,
        front_camera: req.body.front_camera,
        back_camera: req.body.back_camera,
        battery: req.body.battery,
        battery_type: req.body.battery_type,
        two_g: req.body.two_g,
        three_g: req.body.three_g,
        four_g: req.body.four_g,
        wifi: req.body.wifi,
        usb: req.body.usb,
        music: req.body.music,
        video: req.body.video,
        fm: req.body.fm,
        color:req.body.color,
        price:req.body.price,
        desc: req.body.desc,
        warranty:req.body.warranty,
        sim_type:req.body.sim_type,
        operating_system:req.body.operating_system
    })
    newProduct.save((err, product) => {
        if (err){
            console.log(err);
            return res.status(500).send(err);
        }
            return res.status(200).send(product);
    })
});
module.exports = router;