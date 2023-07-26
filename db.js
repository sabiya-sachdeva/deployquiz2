const mongoose=require("mongoose")

const uri="mongodb://127.0.0.1:27017/Exam";
mongoose.connect(uri,{
    useNewUrlParser:true,
    useUnifiedTopology: true,
});


const connection=mongoose.connection;

connection.once('open',()=>{
    console.log("db connected")
})





module.exports = connection;