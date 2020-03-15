const express = require("express");
const app = express();
app.use(express.static(__dirname + "/static"));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.get('/car',(request,response)=>{
    response.render('car')
})
app.get('/cat',(request,response)=>{
    response.render('cat')
})
app.get('/add',(request,response)=>{
    response.render('add')
})
app.get('/', (request, response) => {
    response.send("Hello Express");
});
app.listen(8000, () => console.log("listening on port 8000"));
