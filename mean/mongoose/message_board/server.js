const express = require("express");
const app = express();
const mongoose = require('mongoose');
app.use(express.static(__dirname + "/static"));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.urlencoded({extended: true}));
mongoose.connect('mongodb://localhost/message', {useNewUrlParser: true});
const CommentSchema = new mongoose.Schema({
    name: { type: String, required: [true,"Must have a name"], minlength:[1, "Name must have at least 1 character"]},
    comment: { type: String, required: [true,"Must have a comment"],minlength:[4, "Name must have at least 4 character"]},
}, {timestamps: true});
const MessageSchema = new mongoose.Schema({
    name: { type: String, required: [true,"Must have a name"], minlength:[1, "Name must have at least 1 character"]},
    message: { type: String, required:[true, "Must have a content"],minlength:[4, "Name must have at least 4 character"]},
    comments:[CommentSchema]
}, {timestamps: true});
const Comment = mongoose.model('Comment', CommentSchema);
const Message = mongoose.model('Message', MessageSchema);
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
    Message.find()
        .then(message=>{
            res.render('index',{messages:message})
        })
    
    
})
app.post('/',(req,res)=>{
    let message = new Message()
    message.name = req.body.name;
    message.message = req.body.message;
    message.save()
        .then(newMessageData=>{
            res.redirect('/')
        })
        .catch(err =>{
            for (let key in err.errors){
                req.flash('registration', err.errors[key].message);
            }
            res.redirect('/');
        })
})

app.post('/comment/:id',(req,res)=>{
    Message.findOne({_id:req.params.id})
        .then(message=>{
            message.comments.push({name: req.body.name, comment:req.body.comment});
            message.save()
                .then(res.redirect('/'))
                .catch(err =>{
                    for (let key in err.errors){
                        req.flash('registration', err.errors[key].message);
                    }
                    res.redirect('/');
                })
        })
        .catch(err => console.log(err));
});









app.listen(8000, () => console.log("listening on port 8000"));