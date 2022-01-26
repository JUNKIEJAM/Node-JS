const express=require("express");
const path=require("path")
const app=express();
const port=333;

//serving static files
app.use('/static',express.static('static'));

// set the template engine as pug

app.set('view engine','pug');

//set the view directory
app.set('views',path.join(__dirname,'views'));

//our pug demo end point
app.get("/demo",(req,res)=>{
    res.status(200).render('demo', { title: 'Hey', message: 'Hello there!' })
});


app.get("/",(req,res)=>{
    res.status(200).send("This is homepage of my first express app with Harry");
});

app.get("/about",(req,res)=>{
    res.send("This is about page of my first express app with Harry");
});

app.post("/about",(req,res)=>{
    res.send("This is about post page of my first express app with Harry");
});

app.get("/this",(req,res)=>{
    res.status(404).send("This page is not found");
});



app.listen(port,()=>{
    console.log(`This application started successfully on port ${port}`);
});