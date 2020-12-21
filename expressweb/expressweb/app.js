const express = require('express');
const app=express();
var mysql = require('mysql');
const server=require('http').Server(app)
const path =require('path');






var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'sampleDB'
})

connection.connect(function(error){
    if(!!error){
        console.log('Error');
    }else{
        console.log('connected');
    }
})




const staticPath= path.join(__dirname+"/public");

//console.log(staticPath);

app.set('view engine', 'hbs'); 

app.use(express.static('public'));

const {v4 : uuidv4} = require('uuid');
//console.log(uuidv4());
const value= uuidv4();

app.get('/',(req,res)=>{
    res.render('index');
    //res.redirect(`/${uuidv4()}`);
})

//database

app.get('/data',(req,res)=>{
    connection.query("SELECT * FROM mySampleTable", function(error,row,field){
        if(!!error){
            console.log('Error in query');

        }else{
            console.log('Succssful query');
        }
    })
})



//authentication

app.get('/login',(req,res)=>{
    res.render('login');
    //res.redirect(`/${uuidv4()}`);
})
app.get('/register',(req,res)=>{
    res.render('register');
    //res.redirect(`/${uuidv4()}`);
})
app.get('/forgot',(req,res)=>{
    res.render('forgot');
    //res.redirect(`/${uuidv4()}`);
})
app.get('/reset',(req,res)=>{
    res.render('reset');
    //res.redirect(`/${uuidv4()}`);
})


//homepage
app.get('/joinameeting',(req,res)=>{
    res.render('joinameeting');
    //res.redirect(`/${uuidv4()}`);
})
app.get('/joinameetinglink',(req,res)=>{
    res.render('joinameetinglink');
    //res.redirect(`/${uuidv4()}`);
})
app.get('/about',(req,res)=>{
    res.render('about');
})
app.get('/contact',(req,res)=>{
    res.render('contact');
})


//dashboardfiles
app.get('/profile',(req,res)=>{
    res.render('profile');
})
app.get('/meetings',(req,res)=>{
    res.render('meetings');
})
app.get('/recording',(req,res)=>{
    res.render('recording');
})
app.get('/chats',(req,res)=>{
    res.render('chats');
})
app.get('/support',(req,res)=>{
    res.render('support');
})
app.get('/settings',(req,res)=>{
    res.render('settings');
})
app.get('/editprofile',(req,res)=>{
    res.render('editprofile');
})
app.get('/previousmeetings',(req,res)=>{
    res.render('previousmeetings');
})
app.get('/personalroom',(req,res)=>{
    res.render('personalroom');
})
app.get('/managemeetings',(req,res)=>{
    res.render('managemeetings');
})



app.get('*',(req,res)=>{
    res.send("Welcome to Satyabrata Web error page");
})
server.listen(process.env.PORT || 3000,(req,res)=>{
    console.log("port is running....");
})

//e6680c74-d0dd-466b-b68a-2b01feffe308
//5a8827f0-ac69-4300-80a7-bb531f055a10