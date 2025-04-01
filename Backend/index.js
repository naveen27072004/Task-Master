const express = require('express');
const app = express();
const connectDb = require('./config/dbconfig');
const appindex = require('./app')
// json formate
app.use(express.json())
connectDb()


app.use('/api',appindex)

const PORT = 5000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    });