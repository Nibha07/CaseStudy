
const express = require('express');
// const routes = require('./routes/api')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
mongoose.connect('mongodb://localhost/reg');
mongoose.Promise = global.Promise;
app.use(bodyParser.json())


app.use('/',require('./routes/registration'));
app.use('/',require('./routes/log'));



app.listen(process.env.port ||5051,function(){
    console.log('now listening for requests');

});