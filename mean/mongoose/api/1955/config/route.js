const user =require('../controllers/control.js');
module.exports = function(app){
    app.get('/',(req,res)=>{
        user.index(req,res);
    })
    app.get('/create/:name',(req,res)=>{
        user.create(req,res);
    })
    app.get('/:name',(req,res)=>{
        user.one(req,res);
    })
    app.get('/remove/:name',(req,res)=>{
        user.remove(req,res);
    })
}