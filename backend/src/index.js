// Framework for api routes , midleware , api etc.
import express from "express";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import cors from "cors";
import path from "path";

import { app, server } from "./lib/socket.js";
import { connectDB } from "./lib/db.js";

dotenv.config()

const PORT = process.env.PORT
const __dirname = path.resolve();

app.use(express.json()); // JSON body ko parse karega
app.use(cookieParser());// parse the cookies to ge the value from hash or some random value stored in the database hashed
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));
app.use(express.json({ limit: "100mb" })); // increase limit to avoid "payload too large" errors


app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoutes)
if(process.env.NODE_ENV === "production"){
  app.use(express.static(path.join(__dirname,"../frontend/dist")));
  
  app.get("/*",(req,res)=>{
    res.sendFile(path.join(__dirname,"../frontend", "dist","index.html"));
  })
}


server.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
  connectDB();
});