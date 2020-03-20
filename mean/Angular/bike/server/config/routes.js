const schema = require('../controller/controller.js');
module.exports = function(app){
    app.get('/login',(req,res)=>{
        schema.index(req,res);
    })
    app.get('/schema/new',(req,res)=>{
        schema.new(req,res);
    })
    app.post('/login',(req,res)=>{
        schema.create(req,res);
    })
    app.get('/schemas/:id',(req,res)=>{
        schema.show(req,res);
    })
    app.get('/schemas/:id/edit',(req,res)=>{
        schema.show(req,res);
    })
    app.put('/schemas/:id',(req,res)=>{
        schema.update(req,res);
    })
    app.delete('/schemas/:id',(req,res)=>{
        schema.delete(req,res);
    })

}