const express = require('express');
const app = express();
const router = express.Router();    
const userRoute = require('./routes/UserAuthRoute')

app.use('/user',userRoute)


module.exports = app; 