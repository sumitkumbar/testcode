const express =require('express')
const app =express()
const path = require("path")
const PORT=1212;
 app.use(express.static(path.join(__dirname,"views")))
 app.set('view engine',"ejs")

// app.get("/user",(req,res)=>{
//     const userdata={
//         name:"sumit",
//         age:22,
//         ispremiumUser:false
//     };
//     // res.render("ejs.ejs",userdata)

// })

app.get("/porduct",(req,res)=>{
    const  data=[
        {name:"tv",price:122},
        {name:"watch",price:122}
    ]
    res.render("ejs.ejs",{data})
})


app.listen(PORT,()=>{
    console.log(`SERVER IS RUONING ${PORT}`)
})