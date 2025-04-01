const express = require('express');
const app = express();
const connectDb = require('./config/dbconfig');
const { connect } = require('mongoose');

connectDb()


app.use('/',(req,res)=>{
res.send('Hello World');
})
const PORT = 5000
app.listen(PORT, () => {
    console.log('Server is running on port 3000');
    });