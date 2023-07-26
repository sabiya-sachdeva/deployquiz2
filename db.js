const mongoose=require("mongoose")
const dbName = "Exams23002";
//const uri=`mongodb+srv://sabiya:123@exams23002cluster.szx2hab.mongodb.net/${dbName}?retryWrites=true&w=majority`;
const uri=`mongodb+srv://tempuser:123@cluster0.f9d6o.mongodb.net/${dbName}?retryWrites=true&w=majority`;
mongoose.connect(uri,{
    useNewUrlParser:true,
    useUnifiedTopology: true,
});


const connection=mongoose.connection;

connection.once('open',()=>{
    console.log("db connected")
})





module.exports = connection;