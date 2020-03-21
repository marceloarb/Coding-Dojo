const Movie = require('../models/model.js').Movie;
const Review = require('../models/model.js').Review;
module.exports = {
    index: function(req,res){
        Movie.find()
        .then(movies=>{
            res.json(movies);
        })    
        .catch(err=>{
            res.json(err);
        })
        
    },
    new: function(req,res){
        
    },
    create_review:function(req,res){
        let review = new Review()
        review.name = req.body.name;
        review.stars = req.body.stars;
        review.review = req.body.review;
        review.save()
        console.log("that is my review",review)
        Movie.findOne({_id: req.params.id})
            .then(movie=>{
                movie.reviews.push({name:req.body.name, stars:req.body.stars, review:req.body.review})
                movie.save()
                .then(result=>{
                    res.json(result)
                })
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
    create:function(req,res){
        let movie = new Movie()
        movie.title = req.body.title;
        movie.name = req.body.name;
        movie.stars = req.body.stars;
        movie.review = req.body.review;
        movie.save()
            .then(movie=>{
                res.json(movie);
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
        Movie.findOne({_id:req.params.id})
        .then(movie=>{
            res.json(movie);
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
    edit:function(req,res){

    },
    update:function(req,res){

    },
    delete: function(req,res){
        Movie.remove({_id: req.params.id})
        .then(movie => {
            res.json(movie)
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
    delete_id: function(req,res){
        console.log(req.params.review_id)
        console.log(req.params.movie_id)
        Movie.updateOne({_id: req.params.movie_id}, {$pull: {"reviews":{_id: req.params.review_id}}})
        .then(movie => {
            res.json(movie)
        })
        // Movie.findOne({_id: req.params.movie_id})
        // .then(movie=>{
        //     for (let x = 0; x<movie.reviews.length; x++){
        //         if(movie.reviews[x]._id == req.params.review_id){
        //             movie.reviews.splice(x,1)
        //             break;
        //         }
        //     }
        //     console.log(movie.reviews)
        //     movie.save()
        //     .then(data => res.json(data))
        //     //res.json(movie);
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