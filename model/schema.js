const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({

    name:{type:String,required:true},
    surname:String,
    mob_no:String,
})

const User = new mongoose.model('User',userSchema);

module.exports = User;
