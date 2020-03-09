
const dash = require('../controllers/control.js')
module.exports = function(app){
    app.get('/',(req,res)=>{
        dash.index(req,res);
    })
    
    app.get('/edit/:id', (req,res)=>{
        dash.edit(req,res);
    })
    app.post('/edit/:id', (req,res)=>{
        dash.update(req,res);
    })
    
    app.get('/new',(req,res)=>{
        dash.new(req,res);
    })
    
    app.post('/create', (req,res)=>{
        dash.create(req,res);
    })
    app.get('/delete/:id', (req,res)=>{
        dash.delete(req,res);
    })    
}