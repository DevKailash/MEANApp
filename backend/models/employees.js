const mongoose = require('mongoose');
const employeesSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    designation :{
        type:String,
        required:true
    }
})
module.exports = mongoose.model('employees',employeesSchema);
