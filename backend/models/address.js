const mongoose = require('mongoose');
const employeesSchema = new mongoose.Schema({
  id:{
    type:String,
    required:true
  },
  adressLine1:{
        type:String,
        required:true
    },
    adressLine2:{
        type:String,
        required:true
    },
    pin :{
        type:String,
        required:true
    },
    city:{
      type:String,
      required:true
    },
    landmark :{
        type:String,
        required:true
    }
})
module.exports = mongoose.model('address_info',employeesSchema);
