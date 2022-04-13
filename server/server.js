const path = require('path');
const express = require('express');
 
const publicPath = path.join(__dirname, "/../public");

var app = express();
app.use(express.static(publicPath));

var port_number = server.listen(process.env.PORT || 3000);
app.listen(port_number, ()=>{
    console.log("working now");
});