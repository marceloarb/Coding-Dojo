const cake =require('../controller/controller.js');
module.exports = function(app){
    app.get('/cakes',(req,res)=>{
        cake.index(req,res);
    })
    app.post('/cake/new',(req,res)=>{
        cake.create(req,res);
    })
    app.post('/comment/new/:id',(req,res)=>{
        cake.comment(req,res);
    })
    app.get('/cake/:id',(req,res)=>{
        cake.edit(req,res);
    })
}