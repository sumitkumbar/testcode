const express = require('express')
const userrou = require("C:/Users/sumit/OneDrive/Desktop/new2004/sumit.js");
const postr = require("C:/Users/sumit/OneDrive/Desktop/new2004/post.js");
const permit =require("C:/Users/sumit/OneDrive/Desktop/new2004/autho.js")
const app =express()
const PORT = 1212;

app.use((req,res,next)=>{
    console.log("middlewere")
    next()
})


app.get("/",(req,res)=>{
    res.json({
        messaage:"11111"
    })
})

app.use("/user",permit);
app.use("/user",userrou);
app.use("/posts",postr)


app.listen(PORT,()=>{
    console.log(`hellow port${PORT}`)
})