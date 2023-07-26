const express=require("express");
const  mongoose  = require("mongoose")
const db=require("./db")
const app=express();



const bookschema=new mongoose.Schema({
    name:String,
    sid:Number
})

const book=mongoose.model("examrecords",bookschema);

const data=[
    {name:"sabiya",
     sid:300357448
    }
]
async function insertdata(){
    try{
        await book.insertMany(data);
    
        console.log("successfully")
    }
    catch(err)
    {
        console.error(err)
    }finally{
        mongoose.connection.close();
    }
}


app.get("/",(req,res)=>{

   
    res.send(insertdata());
   
    console.log("record added to database")
})


app.listen(3000,()=>{
    console.log("connection set up")
})