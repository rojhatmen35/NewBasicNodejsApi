require("express-async-errors")
const express=require("express")
const app=express()
require("dotenv").config()
require("./src/db/dbConnection")
const port=process.env.PORT || 5001
const router=require("./src/routers")
const errorHandlerMiddleware=require("./src/middlewares/errorHandler")

//Middleware
app.use(express.json())
app.use(express.json({limit:"50mb"}))
app.use(express.urlencoded({limit:"50mb",extended:true,parameterLimit:50000}))

app.use("/api",router)


app.get("/",(req,res)=>{
    res.json({
        message:"Hoş Geldiniz"
    })
})


//Hata Yakalama
app.use(errorHandlerMiddleware)

app.listen(port,()=>{
    console.log(`Server ${port} portunda çalışıyor...`);
})