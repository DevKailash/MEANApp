var express = require('express');
var router = express.Router();
const employeeSchema = require('../models/employees');
const personalSchema = require('../models/personal_info');
const officeSchema = require('../models/office_info');
const addressSchema = require('../models/address');
const educationSchema = require('../models/emp_education');


/* GET emploees listing. */
router.get('/', async(req, res, next)=> {
  try{
    const employees  = await employeeSchema.find()
    res.json(employees)
  }catch(err){
    res.send('Error '+err);
  }
});

/* post eployee data. */
router.post('/', async(req, res, next)=>{
  const reqDetails = req.body;
  // compare schema store the value for employee
  const employee = employeeSchema(reqDetails.employee);

  // passing employee table id to all the table.
  reqDetails.personal_Info.id = employee._id;
  reqDetails.office_Info.id = employee._id
  reqDetails.address.id = employee._id
  reqDetails.education_info.id = employee._id

  // compare schema store the value
  const personal_info = personalSchema(reqDetails.personal_Info);
  // console.log(reqDetails.office_Info);
  const office_info = officeSchema(reqDetails.office_Info);
  const address = addressSchema(reqDetails.address);
  const education_info = educationSchema(reqDetails.education_info);
  // console.log([employee,personal_info,office_info,address,education_info]);

  // save the details in mongodp
  try{
    await employee.save()
    await personal_info.save()
    await office_info.save()
    await address.save()
    await education_info.save()
    res.json({message:"success"})
  }catch(err){
    res.send(err)
  }
})
module.exports = router;
