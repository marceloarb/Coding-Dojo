const author = require('../control/control.js');
module.exports = function(app){
    app.get('/authors',(req,res)=>{
        author.index(req,res);
    })
    app.get('/author/new',(req,res)=>{
        author.new(req,res);
    })
    app.post('/authors',(req,res)=>{
        author.create(req,res);
    })
    app.get('/authors/:id/edit',(req,res)=>{
        author.show(req,res);
    })
    app.put('/authors/:id',(req,res)=>{
        console.log(req.body)
        author.update(req,res);
    })
    app.delete('/authors/:id',(req,res)=>{
        author.delete(req,res);
    })
    app.get('/vote/:id',(req,res)=>{
        author.votes_up(req,res);
    })
    app.get('/votes/:id',(req,res)=>{
        author.votes_down(req,res);
    })

}