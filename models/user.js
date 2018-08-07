const mongoose = require('mongoose');
const bcrypt=require('bcryptjs');
const config=require('../config/database')
//Craeting UserSchema
const UserSchema = mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        default: ""
    },
    email: {
        type: String,
        required: true,
        lowercase:true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    valid: {
        type: Boolean,
        default: true
    },
    address: [
        {
                area: { type: String, required: true },
                city: { type: String, required: true },
                state: { type: String, required: true },
                pincode: { type: Number, required: true }
        }],
    bought: [String],
    interestedIn: [String],
    role:{
        type:String,
        required:true,
        default:"user"
    }
});
const User=module.exports=mongoose.model('User',UserSchema);
//random key to hash a password
module.exports.addUser=function(newUser,callBack){
    bcrypt.genSalt(10,(err,salt)=>{
        bcrypt.hash(newUser.password,salt,(err,hash)=>{
            if(err)
            console.log(err)
            newUser.password=hash;
            newUser.save(callBack);
        })
    })
}

//get UserById
module.exports.getUserById=function(id,callBack){
    User.findById(id,callBack);
}
module.exports.getUserByUsername=function(email,callback){
    const query={email:email}
    User.findOne(query,callback);
}

module.exports.comparePassword=function(candidatePwd,hash,callBack){
bcrypt.compare(candidatePwd,hash,(err,isMatch)=>{
if(err)
console.log(err);
callBack(null,isMatch);
});
}