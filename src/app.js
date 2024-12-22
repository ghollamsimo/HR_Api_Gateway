const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors('*'));


const authRoute = require('../src/routes/auth');


app.use('/auth', authRoute);



app.listen(PORT, () => console.log(`server running on port ${PORT}`));