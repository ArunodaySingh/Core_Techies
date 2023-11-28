/*
This code connects to a MongoDB database.
It uses the mongoose library to connect to the database.
It uses the MONGO_URL environment variable to specify the connection string.
*/
const mongoose = require("mongoose");

async function connectToDatabase() {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Mongodb Connected !");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
}

module.exports = connectToDatabase;
