const User = require('../models/model.js').User;
const Bike = require('../models/model.js').Bike;
module.exports = {
    index: function(req,res){

    },
    new: function(req,res){
        
    },
    create:function(req,res){
        let login = new User()
        login.name = req.body.name;
        login.password = req.body.password;
        login.email = req.body.email;
        login.save()
            .then(login=>{
                res.json(login);
            })
            .catch(err => {
                bad=[];
                // adjust the code below as needed to create a flash message with the tag and content you would like
                for (var key in err.errors) {
                    bad.push(err.errors[key].message);
                }
                res.json(bad);
            })
    },
    
    show:function(req,res){

    },
    edit:function(req,res){

    },
    update:function(req,res){

    },
    delete: function(req,res){
        
    },
    

}