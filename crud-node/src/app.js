const express= require("express");
const {dbcon}=require("./dbconfig/database.js");
const routes=require("./routes/routes.js");
const bodyParser = require("body-parser");
const cors=require("cors");
const app=express();
const PORT=process.env.PORT || 5000;

dbcon();
app.use(bodyParser.json());
app.use(cors());
app.use("/api/user" , routes);

app.listen(PORT, ()=>{
    console.log(`Server is Running on PORT : ${PORT}`);
});



