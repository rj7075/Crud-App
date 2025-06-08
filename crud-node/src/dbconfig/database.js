const mongoose=require("mongoose");
const dbcon= async ()=>{
    try{
      await mongoose.connect("mongodb://localhost:27017/crud-operation");
      console.log("Successfully Connected to MongoDB");
    }
    catch(error){
        console.log(`Mongodb connection error: ${error}`);
    }
}

module.exports={mongoose,dbcon}; 