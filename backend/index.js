import express from "express";
import { PORT, mongoDB_URL } from "./config.js";
import mongoose from "mongoose";
import booksRoute from "./routes/booksRoute.js";
import cors from "cors";

const app = express();
app.use(express.json());

app.use(cors());

// app.use(
//   cors({
//     origin: "http://localhost:3000",
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders: ["Content-Type"],
//   })
// );

app.get("/", (req, res) => {
  console.log(req);
  return res.status(234).send("Welcome to MERN stack, Harsh!");
});

app.use("/books/", booksRoute);

mongoose
  .connect(mongoDB_URL)
  .then(() => {
    console.log("App connected to DB");
    app.listen(PORT, () => {
      console.log("Server is running...");
    });
  })
  .catch((error) => {
    console.log(error);
  });
