import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
mongoose
  .connect(process.env.dbString)
  .then(() => {
    console.log("db successfully connected ✅ ");
  })
  .catch((error) => {
    console.log(error);
  });

const app = express();
app.listen(3000, () => {
  console.log("server is running on port 3000 ");
});
