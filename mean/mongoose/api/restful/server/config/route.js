const task =require('../controller/control.js');
module.exports = function(app){
    app.get('/tasks',(req,res)=>{
        task.tasks(req,res);
    })
    app.post('/tasks',(req,res)=>{
        task.create(req,res);
    })
    app.get('/edit/:id',(req,res)=>{
        task.edit(req,res);
    })
    app.post('/edit/:id',(req,res)=>{
        task.update(req,res);
    })
    app.get('/delete/:id',(req,res)=>{
        task.delete(req,res);
    })
}