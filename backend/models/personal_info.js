const mongoose = require('mongoose');
const employeesSchema = new mongoose.Schema({
  id:{
    type:String,
    required:true
  },
  father_name:{
      type:String,
      required:true
  },
  family_no:{
      type:String,
      required:true
  },
  tel :{
      type:String,
      required:true
  },
  email:{
    type:String,
    required:true
  },
  personal_contact :{
      type:String,
      required:true
  },
  emergency_contact :{
      type:String,
      required:true
  }
})
module.exports = mongoose.model('personal_info',employeesSchema);
