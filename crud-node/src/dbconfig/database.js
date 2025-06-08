const mongoose = require("mongoose");
const dbcon = async () => {
  try {
    // await mongoose.connect("mongodb://localhost:27017/crud-operation");
    await mongoose.connect(
      "mongodb+srv://rj7075yadav:MGlrLghJubnRTv4S@cluster0.te58gpq.mongodb.net/crud-app"
    );
    console.log("Successfully Connected to MongoDB");
  } catch (error) {
    console.log(`Mongodb connection error: ${error}`);
  }
};

module.exports = { mongoose, dbcon };
