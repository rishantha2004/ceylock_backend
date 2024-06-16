const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
require('dotenv').config();

app.use(cors());
app.use(express.json());


app.listen(process.env.PORT, () => {
    console.log(`Server started on PORT ${process.env.PORT}`);
})