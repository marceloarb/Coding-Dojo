const User = require('../models/models.js')

module.exports = {
    index: function(req,res){
        User.find()
        .then(users =>{
            res.render('index', {users:users})
    })},
    new: function(req,res){
        res.render('new')
    },
    edit: function(req,res){
        User.findOne({_id: req.params.id})
        .then(data => {
        console.log(req.params.id)

        res.render('edit',{user:data})
    })},
    create: function(req,res){
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
        })},
    update: function(req,res){
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
    },
    delete: function(req,res){
        User.remove({_id: req.params.id})
        .then(user => {
            res.redirect('/')
        })
        .catch(err => res.json(err));
    }

}