const mongoose=require('mongoose');
const ProductSchema=mongoose.Schema({
    model_name:{type:String,required:true},
    company:{type:String,required:true},
    image:{type:String,required:true},
    stock:{type:Number,required:true,min:0,validate:{
        validator:Number.isInteger,message:'Not an Integer'
    }},
    screen_size:{type:Number,required:true,min:0},
    ram:{type:Number,required:true,min:0,validate:{validator:Number.isInteger,message:'Not an Integer'}},
    rom:{type:Number,required:true,min:0,validate:{validator:Number.isInteger,message:'Not an Integer'}},
    memory:{type:Number,required:true,min:0,validate:{validator:Number.isInteger,message:'Not an Integer'}},
    front_camera:{type:Number,required:true,min:0,validate:{validator:Number.isInteger,message:'Not an Integer'}},
    back_camera:{type:Number,required:true,min:0,validate:{validator:Number.isInteger,message:'Not an Integer'}},
    battery:{type:String,required:true},
    battery_type:{type:Boolean,required:true},
    two_g:{type:Boolean,required:true},
    three_g:{type:Boolean,required:true},
    four_g:{type:Boolean,required:true},
    wifi:{type:Boolean,required:true},
    usb:{type:Boolean,required:true},
    music:{type:Boolean,required:true},
    video:{type:Boolean,required:true},
    fm:{type:Boolean,required:true},
    desc:{type:String,required:false,default:''}
});
const Product=module.exports=mongoose.model('Product',ProductSchema);