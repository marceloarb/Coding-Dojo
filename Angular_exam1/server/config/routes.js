const movie = require('../controller/controller.js');
module.exports = function(app){
    app.get('/movies',(req,res)=>{
        movie.index(req,res);
    })
    app.post('/movies',(req,res)=>{
        movie.create(req,res);
    })
    app.post('/review/:id',(req,res)=>{
        movie.create_review(req,res);
    })
    app.get('/movies/:id',(req,res)=>{
        movie.show(req,res);
    })
    app.get('/movies/:id/edit',(req,res)=>{
        movie.show(req,res);
    })
    app.put('/movies/:id',(req,res)=>{
        movie.update(req,res);
    })
    app.delete('/movie/:id',(req,res)=>{
        movie.delete(req,res);
    })
    app.delete('/review/:movie_id/:review_id',(req,res)=>{

        movie.delete_id(req,res);
    })

}