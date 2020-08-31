const createError = require('http-errors')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
// Enable mongoDB
const mongodb = require("./DB/mongodb")
mongodb();

const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json())
// Run the server
app.listen(9000,()=>{
  console.log("server started");
})

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/employees');
// app.use('/', indexRouter);
app.use('/employees', usersRouter);


// catch 404 and forward to error handler
app.use((req, res, next)=> {
  next(createError(404));
});

// error handler
app.use((err, req, res, next)=> {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({ error: err })
});

module.exports = app;
