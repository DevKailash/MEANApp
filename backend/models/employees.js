const mongoose = require('mongoose');
const employeesSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    mobile:{
        type:Number,
        required:true
    },
    city:{
        type:String,
        required:true
    }
})
module.exports = mongoose.model('employees',employeesSchema);