const express = require("express");
const app = express();
app.use(express.urlencoded({extended: true}));
const mongoose = require('./server/config/mongo.js');
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.json());
app.use(express.static( __dirname + '/public/dist/public' ));





require('./server/config/route.js')(app)
app.listen(8000, () => console.log("listening on port 8000"));