const express = require("express");
const app = express();
const mongoose = require('mongoose');
app.use(express.static(__dirname + "/static"));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.urlencoded({extended: true}));
mongoose.connect('mongodb://localhost/name_of_your_DB', {useNewUrlParser: true});
const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    place: String,
    comment: String,
})
const User = mongoose.model('User', UserSchema);
const session = require('express-session');
app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))
app.get('/',(req,res)=>{
    User.find()
        .then(data => res.render("index", {users: data}))
        .catch(err => res.json(err));
    res.render('index')
})

app.post('/result',(req,res)=>{
    let user = new User()
        user.name= req.body.name;
        user.email= req.body.email;
        user.place= req.body.place;
        user.comment= req.body.comment;
        user.save()
            .then(newUserData => console.log('user created', newUserData))
            .catch(err => console.log(err));

    
    req.session.user = user;

    res.redirect('/result')
})
app.get('/result',(req,res)=>{
    res.render('result',{user:req.session.user})
})






app.listen(8000, () => console.log("listening on port 8000"));