const express = require("express");
const app = express();
const mongoose = require('mongoose');
app.use(express.static(__dirname + "/static"));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.urlencoded({extended: true}));
mongoose.connect('mongodb://localhost/quote', {useNewUrlParser: true});
const UserSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 6},
    quote: { type: String, required: true, minlength: 10}
}, {timestamps: true});
const User = mongoose.model('User', UserSchema);
const flash = require('express-flash');
app.use(flash());
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
    let user = new User()
        user.name= req.body.name;
        user.quote= req.body.quote;
        user.save()
            .then(newUserData => {
                console.log('user created', newUserData)
                res.redirect('/result')
            })
            .catch(err => {
                console.log("We have an error!", err);
                // adjust the code below as needed to create a flash message with the tag and content you would like
                for (var key in err.errors) {
                    req.flash('registration', err.errors[key].message);
                }
                res.redirect('/');
            });
    
})

app.get('/result',(req,res)=>{
    User.find()
        .then(users =>{
            res.render('result', {users:users})
        })

})






app.listen(8000, () => console.log("listening on port 8000"));