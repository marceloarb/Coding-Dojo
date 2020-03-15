const Task = require('../models/model.js');

module.exports = {
    tasks: function(req,res){
        Task.find()
        .then(tasks =>{
            res.json(tasks)
    })
        .catch(err=>{
            res.json(err)
        })
    },
    edit: function(req,res){
        Task.findOne({_id:req.params.id})
        .then(task=>{
            console.log("-__________________________", task)
            res.json(task);
        
        })
        .catch(err=>{
            res.json(err)
        })
    },
    create: function(req,res){
        console.log('***********************')
        console.log(req.body)
        let task = new Task()
        task.title= req.body.title;
        task.description = req.body.description;
        task.save()
            .then(task => {
                res.json(task)
            })
            .catch(err => {
                console.log("We have an error!", err);
                // adjust the code below as needed to create a flash message with the tag and content you would like
                for (var key in err.errors) {
                    req.flash('registration', err.errors[key].message);
                }
                res.json(err);
        })},
    update: function(req,res){
        Task.findOne({_id: req.params.id})
        .then(task=>{
            task.title=req.body.title; 
            task.description=req.body.description; 
            return task.save()
            
        }) 
        .then(result => {

            res.json(result)
        })
                
        .catch(err => {
                console.log("We have an error!", err);
                // adjust the code below as needed to create a flash message with the tag and content you would like
                for (var key in err.errors) {
                    req.flash('registration', err.errors[key].message);
                }
                res.json(err);
            });
    },
    delete: function(req,res){
        Task.remove({_id: req.params.id})
        .then(task => {
            res.json(task)
        })
        .catch(err => res.json(err));
    }
}