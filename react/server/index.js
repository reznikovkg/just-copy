import express from "express";
import cors from "cors";

import mongoose from "mongoose";

import {
  create,
  getAll,
  remove,
  update,
} from "./controllers/NotificationController.js";

mongoose.set("strictQuery", true);

mongoose
  .connect(
    "mongodb+srv://admin:211425@mernapp.wzutsvv.mongodb.net/mernStudy?retryWrites=true&w=majority"
  )
  .then(() => console.log("DB connected"))
  .catch((err) => console.error(err));

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("hello,client!!!");
});

app.post("/notifications", create);
app.get("/notifications", getAll);
app.delete("/notifications/:id", remove);
app.patch("/notifications/:id", update);

app.listen(4444, (error) => {
  error && console.log(error);

  console.log("Server works ok :)");
});
