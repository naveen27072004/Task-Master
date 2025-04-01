const express = require('express');
const app = express();
const router = express.Router();    
const userRoute = require('./routes/UserAuthRoute')
const employeeRoute = require('./routes/EmployeesRoute')

app.use('/user',userRoute)
app.use('/employee', employeeRoute)


module.exports = app; 