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
app.get('/profile',(request,response)=>{
    let cat = {name:"juju",age:"5",food:"spaghetti",sleeping:"under the bad",url:"/images/cat1.jpg"}
    response.render('profile',{cat:cat});
})
app.get('/profile1',(request,response)=>{
    let cat = {name:"jaja",age:"6",food:"steak",sleeping:"under the couch",url:"/images/cat2.jpg"}
    response.render('profile',{cat:cat});
})
app.get('/add',(request,response)=>{
    response.render('add')
})
app.get('/', (request, response) => {
    response.send("Hello Express");
});
app.listen(8000, () => console.log("listening on port 8000"));
