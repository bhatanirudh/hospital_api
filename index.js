require('dotenv').config();
const express = require('express');
const port=process.env.PORT || 8000;
const app = express();
const db = require('./config/mongoose');

//importing passport stratergies
const passport = require('passport');
const passportJWT = require('./config/passport_jwt_strategy');


app.use(express.json());
app.use(express.urlencoded({
    extended: true
  }));

  // requiring routes
app.use('/', require('./routes'));

app.listen(port, function (err) {
    if (err) { console.log('error'); return; }
    
    console.log(`server is running on ${port}`);
});