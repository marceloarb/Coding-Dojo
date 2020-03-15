const User = require('../models/models.js');

module.exports = {
    index: function(req,res){
        User.find()
        .then(users=>{
            res.json(users);
        
        })
        .catch(err=>{
            res.json(err);
        })
    },
    create: function(req,res){
        let user = new User()
        user.name= req.params.name;
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
                res.redirect('/');
        })},
    one: function(req,res){
        User.findOne({name:req.params.name})
        .then(users=>{
            res.json(users);
        
        })
        .catch(err=>{
            res.json(err);
        })
    },
    remove: function(req,res){
        User.remove({name:req.params.name})
        .then(users=>{
            res.json(users);
        })
        .catch(err=>{
            res.json(err);
        })
    }
}