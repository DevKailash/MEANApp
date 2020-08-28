var express = require('express');
var router = express.Router();
const schema = require('../models/employees');
/* GET emploees listing. */
router.get('/', async(req, res, next)=> {
  try{
    const employees  = await schema.find()
    res.json(employees)
  }catch(err){
    res.send('Error '+err);
  }
});

/* post eployee data. */
router.post('/', async(req, res, next)=>{
  console.log(req.body);
  const employee = schema({
    name: req.body.name,
    mobile:req.body.mobile,
    city:req.body.city
  })
  try{
    const data = await employee.save()
    res.json(data)
  }catch(err){
    res.send(err)
  }
})
module.exports = router;
