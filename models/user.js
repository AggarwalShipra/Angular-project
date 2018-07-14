const mongoose = require('mongoose');

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
    interestedIn: [String]
});
const User=module.exports=mongoose.model('User',UserSchema);