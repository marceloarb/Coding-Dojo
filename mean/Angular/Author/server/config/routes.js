const author = require('../control/control.js');
module.exports = function(app){
    app.get('/authors',(req,res)=>{
        author.index(req,res);
    })
    app.get('/author/new',(req,res)=>{
        author.new(req,res);
    })
    app.post('/authors',(req,res)=>{
        console.log(req.body)
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

}