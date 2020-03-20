const Author = require('../model/model.js');
module.exports = {
    index: function(req,res){
        Author.find()
        .then(author=>{
            res.json(author)
        })
        .catch(err => {
            console.log("We have an error!", err);
            // adjust the code below as needed to create a flash message with the tag and content you would like
            for (var key in err.errors) {
                req.flash('registration', err.errors[key].message);
            }
            res.json(err);
        })},
    new: function(req,res){
        
    },
    create:function(req,res){
        let author = new Author()
        author.name = req.body.name;
        author.quote = req.body.quote;
        author.save()
            .then(author=>{
                res.json(author);
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
        Author.findOne({_id:req.params.id})
            .then(author=>{
                res.json(author);
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
    update:function(req,res){
        console.log(req.params.id)
        Author.findOne({_id:req.params.id})
            .then(author=>{
                author.name = req.body.name;
                author.quote = req.body.quote;
                return author.save()
                
            })
            .then(author=>{
                res.json(author);
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
    delete: function(req,res){
        Author.remove({_id: req.params.id})
        .then(author => {
            res.json(author)
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
    votes_up: function(req,res){
        console.log(req.params.id)
        Author.findOne({_id:req.params.id})
            .then(author=>{
                author.votes += 1;
                author.save()
                .then(author=>{
                    res.json(author);
                })
                
            })
            // .then(author=>{
            //     res.json(author);
            // })
            .catch(err => {
                console.log("We have an error!", err);
                // adjust the code below as needed to create a flash message with the tag and content you would like
                for (var key in err.errors) {
                    req.flash('registration', err.errors[key].message);
                }
                res.json(err);
            })
    },
    votes_down: function(req,res){
        console.log(req.params.id)
        Author.findOne({_id:req.params.id})
            .then(author=>{
                author.votes -= 1;
                author.save()
                .then(author=>{
                    res.json(author);
                })
                
            })
            // .then(author=>{
            //     res.json(author);
            // })
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