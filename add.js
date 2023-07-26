const  mongoose  = require("mongoose")
const db=require("./db")

const bookschema=new mongoose.Schema({
    name:String,
    sid:Number
})

const book=mongoose.model("Quiz",bookschema);

const data=[
    {name:"sabiya",
     sid:300357448
    }
]
async function insertdata(){
    try{
        await book.create(data);
        console.log("successfully")
    }
    catch(err)
    {
        console.error(err)
    }finally{
        mongoose.connection.close();
    }
}

insertdata();