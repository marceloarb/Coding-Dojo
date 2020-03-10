const express = require("express");
const app = express();
const mongoose = require('./config/mongo.js');
app.use(express.static(__dirname + "/static"));
app.use(express.json());








require('./config/route.js')(app)
app.listen(8000, () => console.log("listening on port 8000"));