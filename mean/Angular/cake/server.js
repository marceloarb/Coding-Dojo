const express = require("express");
const app = express();
app.use(express.urlencoded({extended: true}));
const mongoose = require('./server/config/mongo.js');
app.use(express.json());
app.use(express.static( __dirname + '/public/dist/public' ));
const flash = require('express-flash');
app.use(flash());





require('./server/config/routes.js')(app)
app.listen(8000, () => console.log("listening on port 8000"));