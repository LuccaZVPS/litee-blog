import { app } from "./infra/server/app";
import { Amqp } from "@litee-blog/shared/infra/broker/index";
import mongoose from "mongoose";
export const amqp = new Amqp();
const startup = async () => {
  await amqp.start(process.env.RABBITMQ_URL || "amqp://rabbitmq:5672");
  await mongoose.connect(
    process.env.MONGO_URL || "mongodb://mongo-auth:27017/auth"
  );
  app.listen(process.env.PORT || 3000);
  console.log("Server running!");
};
startup();
