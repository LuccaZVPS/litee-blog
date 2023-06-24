import { Amqp } from "@litee-blog/shared/infra/broker/amqpliib";
import { app } from "./infra/server/app";
import mongoose from "mongoose";
import { EventNames } from "@litee-blog/shared/infra/broker";
export const amqp = new Amqp();
const startup = async () => {
  console.log(process.env.MONGO_URL);
  await amqp.start(process.env.RABBITMQ_URL || "amqp://rabbitmq:5672");
  await amqp.assertQueue(EventNames.AccountCreated);
  await mongoose.connect(
    process.env.MONGO_URL || "mongodb://mongo-auth:27017/auth"
  );
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log("Server running on " + port);
  });
};
startup();
