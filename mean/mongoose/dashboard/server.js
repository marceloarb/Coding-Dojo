const express = require("express");
const app = express();
const mongoose = require('./server/config/mongo.js');
app.use(express.static(__dirname + "/static"));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.urlencoded({extended: true}));
const flash = require('express-flash');
app.use(flash());
const session = require('express-session');
app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))
require('./server/config/routes.js')(app)




app.listen(8000, () => console.log("listening on port 8000"));