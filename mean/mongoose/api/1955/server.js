const express = require("express");
const app = express();
const mongoose = require('./config/mongo.js');
app.use(express.json());
app.use(express.static( __dirname + '/public/dist/public' ));







require('./config/route.js')(app)
app.listen(8000, () => console.log("listening on port 8000"));