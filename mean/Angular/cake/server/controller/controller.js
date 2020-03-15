const Cake = require('../models/model.js');
module.exports = {
    index: function(req,res){
        Cake.find()
        .then(cakes =>{
            res.json(cakes)
    })
        .catch(err=>{
            res.json(err)
        })
    },
    create: function(req,res){
        console.log(req.body.name)
    let cake = new Cake()
    cake.name= req.body.name;
    cake.img = req.body.img;
    cake.save()
        .then(cake => {
            res.json(cake)
        })
        .catch(err => {
            console.log("We have an error!", err);
            // adjust the code below as needed to create a flash message with the tag and content you would like
            for (var key in err.errors) {
                req.flash('registration', err.errors[key].message);
            }
            res.json(err);
    })},
    
    comment: function(req,res){
        Cake.findOne({_id: req.params.id})

        .then(cake=>{
            cake.rates.push({stars:req.body.stars,comment: req.body.comment})
            cake.save()
            .then(result => {
                console.log("this is from the controller",result)
                res.json(result)
            })
        })      
        .catch(err => {
                console.log("We have an error!", err);
                // adjust the code below as needed to create a flash message with the tag and content you would like
                for (var key in err.errors) {
                    req.flash('registration', err.errors[key].message);
                }
                res.json(err);
        })
    },
    edit: function(req,res){
        Cake.findOne({_id: req.params.id})
        .then(cake=>{
            res.json(cake);
        })
        .catch(err => {
                        console.log("We have an error!", err);
                        // adjust the code below as needed to create a flash message with the tag and content you would like
                        for (var key in err.errors) {
                            req.flash('registration', err.errors[key].message);
                        }
                        res.json(err);
                })
    }
}