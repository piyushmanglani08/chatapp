const path = require('path');
const express = require('express');
 
const publicPath = path.join(__dirname, "/../public");
const port = process.env.PORT || 3000;
const host = '0.0.0.0';

var app = express();

app.use(express.static(publicPath));

app.listen(3000, ()=>{
    console.log(`${port} is running.`);
})