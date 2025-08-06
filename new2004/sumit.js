const express = require("express")
const path = require("path")
const app = express()
const PORT = 1212;
app.use(express.static(path.join(__dirname,"test")))
//apliing ejs to the stream
app.set("view engine", "ejs")
  
  app.get("/",(req,res)=>{
    res.render("index.ejs")
  })
  app.get("/home",(req,res)=>{
    res
  })
  app.get("/about",(req,res)=>{
    res.sendFile(path.join(__dirname, "/test","about.ejs"));
  })
  app.get("/contact",(req,res)=>{
    res.sendFile(path.join(__dirname, "/test","contact.ejs"));
  })
  


// SERVFRE HANDLER
app.listen(PORT,()=>{
    console.log(`the server is runig on http://localhost//${PORT} thank you `)
})