const express=require("express");

const app=express();
const port=111;

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