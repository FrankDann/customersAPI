var express = require('express');
var app = express();
const PORT = process.env.PORT || 3000;
var bodyParser = require('body-parser');
require('dotenv').config();

// DB
var mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);
mongoose.connect(process.env.MONGO_URI,{useNewUrlParser: true});

// Routes:
var personRoute = require('./routes/person');
var companyRoute = require('./routes/company');
var customerRoute = require('./routes/customer');
var orderRoute = require('./routes/order');

app.use((req,res,next) => {
    console.log(`${new Date().toDateString()} ==> ${req.originalUrl}`);
    next();
});

app.use(bodyParser.json());
app.use(express.static('public'));
app.use(personRoute);
app.use(companyRoute);
app.use(customerRoute);
app.use(orderRoute);
app.use((req,res,next) => {
    res.status(404).send('Page not found, sorry!');
});

app.listen(PORT, () => {
    console.log(`Server has started on port ${PORT}`);
});