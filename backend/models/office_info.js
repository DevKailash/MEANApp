const mongoose = require('mongoose');
const employeesSchema = new mongoose.Schema({
  id:{
    type:String,
    required:true
  },
  empId:{
    type:String,
    required:true
  },
  ctc:{
    type:String,
    required:true
  },
  deskId :{
    type:String,
    required:true
  },
  extention:{
    type:String,
    required:true
  },
  assetId :{
    type:String,
    required:true
  }
})
module.exports = mongoose.model('office_info',employeesSchema);
