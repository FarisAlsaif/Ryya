// const mongoose = require("mongoose");
import mongoose from "mongoose";

// MongoDB connection URL
const mongoURL = "mongodb://127.0.0.1:27017/ryya";

// Connect to MongoDB
mongoose
  .connect(mongoURL)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB");
    console.error(error);
  });

// Get the default connection
const db = mongoose.connection;

export { db };
