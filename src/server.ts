import express from "express";
import "dotenv/config";
import Queue from "./redis/Queue";
import { SendMessageController } from "./controllers/SendMessage";

const app = express();

Queue.process();

new SendMessageController().handle();

//Queue.add("Hello", {});
app.listen(3333, async () => {
  console.log("listening on 3333");
});
