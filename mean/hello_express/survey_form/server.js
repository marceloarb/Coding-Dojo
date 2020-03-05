const express = require("express");
const app = express();
app.use(express.static(__dirname + "/static"));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.urlencoded({extended: true}));
const session = require('express-session');
app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))
app.get('/',(req,res)=>{
    res.render('index')
})
app.post('/result',(req,res)=>{
    let data = {
        "name": req.body.name,
        "email": req.body.email,
        "place": req.body.place,
        "comment": req.body.comment

    }

    res.render('result',{data:data})
})






app.listen(8000, () => console.log("listening on port 8000"));