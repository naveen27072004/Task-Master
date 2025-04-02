const express = require('express');
const app = express();
const cors = require('cors');
const connectDb = require('./config/dbconfig');
const appindex = require('./app')

app.use(express.json())
app.use(cors({origin:"*"}))
connectDb()


app.use('/api',appindex)

const PORT = 5000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    });