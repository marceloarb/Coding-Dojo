const express = require("express");
const app = express();
const mongoose = require('mongoose');
app.use(express.static(__dirname + "/static"));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.urlencoded({extended: true}));
mongoose.connect('mongodb://localhost/mongoose', {useNewUrlParser: true});
const UserSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 3},
    age: { type: Number, min: 1, max: 10},
    url: { type: String, required: true}
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
    User.find()
        .then(users =>{
            res.render('index', {users:users})
        })
})

app.get('/edit/:id', (req,res)=>{
    
    User.findOne({_id: req.params.id})
    .then(data => {
        console.log(req.params.id)

        res.render('edit',{user:data})
    })
})
app.post('/edit/:id', (req,res)=>{
    console.log('*********************')
    User.findOne({_id: req.params.id})
    .then(user=>{
        user.name=req.body.name; 
        user.age=req.body.age; 
        user.url=req.body.url;
        return user.save()
        
    }) 
    .then(result => {

        res.redirect('/')
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

app.get('/new',(req,res)=>{
    res.render('new')
})

app.post('/create', (req,res)=>{
    let user = new User()
        user.name= req.body.name;
        user.age= req.body.age;
        user.url= req.body.url;
        user.save()
            .then(newUserData => {
                console.log('user created', newUserData)
                res.redirect('/')
            })
            .catch(err => {
                console.log("We have an error!", err);
                // adjust the code below as needed to create a flash message with the tag and content you would like
                for (var key in err.errors) {
                    req.flash('registration', err.errors[key].message);
                }
                res.redirect('/new');
            });

})
app.get('/delete/:id', (req,res)=>{
    User.remove({_id: req.params.id})
    .then(user => {
        res.redirect('/')
    })
    .catch(err => res.json(err));
})



app.listen(8000, () => console.log("listening on port 8000"));