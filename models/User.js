const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    usuario:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:false
    }

});

module.exports = mongoose.model('User', UserSchema);