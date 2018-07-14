// 'use strict'
//importing modules
var express=require('express');
var mongoose=require('mongoose');
var bodyParser=require('body-parser');
var cors=require('cors');
var path=require('path');

var app=express();

const route=require("./routes/route");
const productroute=require("./routes/productroute")
//connect to mongodb
mongoose.connect('mongodb://localhost:27017/MobileZone');
//on Successful Connection
mongoose.connection.on('connected',()=>{
    console.log('Connected to database @ 27017');
})

//on connection error
mongoose.connection.on("error",(err)=>{
    if(err)
    {
        console.log("Error in database "+err);
    }
})

//defining port number to be used for backend
const port=3000;

//adding middleware
app.use(cors());
app.use(bodyParser.json());

//static files
app.use(express.static(path.join(__dirname,'public')));
//routes
app.use("/api",route);
app.use("/api",productroute);

//testing server
app.get('/',(req,res)=>{
    res.send('Mobile Zone Project')
});
app.listen(port,()=>{
    console.log('Server Started Working at port: '+port)
});