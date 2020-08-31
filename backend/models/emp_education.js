const mongoose = require('mongoose');
const employeesSchema = new mongoose.Schema({
  id:{
    type:String,
    required:true
  },
  X_score:{
        type:String,
        required:true
    },
    xII_score:{
        type:String,
        required:true
    },
    garduation_type :{
        type:String,
        required:true
    },
    garduation_score:{
      type:String,
      required:true
    },
    master_type :{
        type:String,
        required:true
    },
    master_score :{
        type:String,
        required:true
    }
})
module.exports = mongoose.model('education',employeesSchema);
