const mongoose=require("mongoose")

mongoose.connect(process.env.DB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=>{
        console.log("Veritabanına bağlandınız...");
    })
    .catch((err)=>{
        console.log("Veritabanına bağlanamadınız!!! :",err);
    })