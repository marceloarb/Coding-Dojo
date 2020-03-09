
const quotes = require('../controllers/quotes');



module.exports = function(app){
    app.get('/',(req,res)=>{
        quotes.index(req,res);
    })

    app.post('/result',(req,res)=>{
        quotes.create(req,res);
    })

    app.get('/result',(req,res)=>{
        quotes.result(req,res);
    })
}