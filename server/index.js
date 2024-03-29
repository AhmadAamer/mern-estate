import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
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
app.use(express.json());
app.use(cors());
app.listen(3000, () => {
  console.log("server is running on port 3000 ");
});

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "internal sever error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
