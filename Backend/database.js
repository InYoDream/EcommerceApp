const cors = require("cors");
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const signupRoutes = require("./routes/signup");
const authRoutes = require("./authRoutes.js");
app.use(cors());
app.use(express.json());
const uri =
  "mongodb+srv://abhishekkothiyal002:Thedemonking101.@cluster0.aiccdxx.mongodb.net/?retryWrites=true&w=majority";

async function connect() {
  try {
    await mongoose.connect(uri);
    console.log("Successful connection.");
  } catch (error) {
    console.error(error);
  }
}

connect();

app.use(express.json());
app.use("/api", authRoutes);

app.listen(8000, () => {
  console.log("Server started on port 8000");
});
