const express=require("express");
const path=require("path")
const app=express();
const fs=require("fs");
const port=333;

//EXPRESS SPECIFIC STUFF
//serving static files
app.use('/static',express.static('static'));
app.use(express.urlencoded());

// set the template engine as pug

app.set('view engine','pug');

//PUG Specific Stuf
//set the view directory
app.set('views',path.join(__dirname,'views'));

/*
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
}); */

//END POINTS

app.get('/',(req,res)=>{
     
    const con="This is the best content on website";
    const params={'title':'This is the best website',"content":con};
    res.status(200).render('index.pug',params)    // render for template and not send
})

app.post('/',(req,res)=>{

    name=req.body.name
    age=req.body.age
    gender=req.body.gender
    address=req.body.address
    more=req.body.more

    let output_write=`the name of the client is ${name}, ${age} years old , ${gender} residing at ${address}. More about him : ${more}`;
    fs.writeFileSync('output.txt',output_write);

    const params={'message':'Your form has been submitted successfully'};

    res.status(200).render('index.pug',params);
})



//Start the server
app.listen(port,()=>{
    console.log(`This application started successfully on port ${port}`);
});