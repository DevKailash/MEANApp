const mongoose = require('mongoose')
const url  = 'mongodb+srv://user1:1234@cluster0.wyolt.mongodb.net/CRUD?retryWrites=true&w=majority';

const connection = async()=>{
  await mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  }).then(() =>  console.log('connection successful'))
    .catch((err) => console.error(err));
}

module.exports = connection;
