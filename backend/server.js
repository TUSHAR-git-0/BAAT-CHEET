import path from "path";
dotenv.config();
import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";
import { connectToMongoDB } from "./db/connectToMongoDB.js";
import cookieParser from "cookie-parser";
import { app, server } from "./socket/socket.js";
import cors from "cors";

app.use(
  cors({
    origin: "https://baat-cheet-1-mnl6.onrender.com",
    credentials: true,
  })
);






const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();
// app.get("/", (req, res) => {
//   res.send("HELLO WORLD!!");
// });
app.use(express.json()); // parse req from req.body from json
app.use(cookieParser());

app.use((req, res, next) => {
   console.log("Incoming Cookie:", req.headers.cookie);
   console.log("Parsed Cookie:", req.cookies);
  next();
});
// debugging middleware to log cookies
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);
// app.use(express.static(path.join(__dirname, "/frontend/dist")));

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
// });


// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "frontend", "dist")));

//   app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
//   });
// }


server.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server Started at PORT: ${PORT}`);
});
