const User = require('../models/quote');

module.exports = {
    index: function(req, res) {
    	res.render('index')
    },
    create: function(req, res) {
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
    },
    result: function(req, res) {
    	User.find()
            .then(users =>{
                res.render('result', {users:users})
            })

    }
}