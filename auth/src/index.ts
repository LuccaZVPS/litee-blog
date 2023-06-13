import { Amqp } from "@litee-blog/shared/infra/broker/amqpliib";
import { app } from "./infra/server/app";
import { config } from "dotenv";
import mongoose from "mongoose";
export const amqp = new Amqp();
const startup = async () => {
  config();
  await amqp.start("amqp://localhost:5672");
  await mongoose.connect("mongodb://127.0.0.1:27017/blog-auth");
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log("Server running on " + port);
  });
};
startup();
