import { app } from "./infra/server/app";
import { Amqp } from "@litee-blog/shared/infra/broker/index";
import { EventNames } from "@litee-blog/shared/infra/broker";
import mongoose from "mongoose";
export const amqp = new Amqp();
const startup = async () => {
  await amqp.start(process.env.RABBITMQ_URL || "amqp://rabbitmq:5672");
  await amqp.assertQueue(EventNames.CategoryCreated);
  await amqp.assertQueue(EventNames.CategoryDeleted);
  await mongoose.connect(
    process.env.MONGO_URL || "mongodb://mongo-auth:27017/auth"
  );
  app.listen(process.env.PORT || 3002);
  console.log("Server running!");
};
startup();
