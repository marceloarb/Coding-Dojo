const express = require("express");
const app = express();
app.use(express.static(__dirname + "/static"));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.urlencoded({extended: true}));
const session = require('express-session');
app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))
app.get('/', (req,res)=>{
    if (req.session.counter ){
        req.session.counter += 0;
        counter = req.session.counter;


        res.render('index')
    }
    
    else{
        req.session.counter = 1;
        res.redirect('/')
    }
})
app.post('/', (req,res)=>{
    if (req.session.counter ){
        req.session.counter += 2;
        counter = req.session.counter;


        res.render('index')
    }
    
    else{
        req.session.counter = 1;
        res.redirect('/')
    }
})

app.post('/reset', (req,res)=>{
    if (req.session.counter){
        req.session.counter=null;
        res.redirect('/')
    }
    else{
        res.redirect('/')
    }
})
const server = app.listen(8000, () => console.log("listening on port 8000"));
const io = require('socket.io')(server);
io.on('connection', function (socket) { //2

    socket.emit('greeting', { msg: 'Greetings, from server Node, brought to you by Sockets! -Server' }); //3
    socket.on('thankyou', function (data) { //7
      console.log(data.msg); //8 (note: this log will be on your server's terminal)
    });
      
  });
