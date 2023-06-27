import { app } from "./infra/server/app";
import { accountCreatedListener } from "./events/listeners/account-created-listener";
import mongoose from "mongoose";
import { connect } from "amqplib";
import { accountUpdatedPublisher } from "./events/publishers/account-updated-publisher";
const startup = async () => {
  await mongoose.connect(
    process.env.MONGO_URL || "mongodb://mongo-auth:27017/accounts"
  );
  const connection = await connect(
    process.env.RABBITMQ_URL || "amqp://rabbitmq:5672"
  );
  await (await accountCreatedListener.start(connection)).listen();
  await accountUpdatedPublisher.start(connection);
  app.listen(process.env.PORT || 3000);
  console.log("Server running!");
};
startup();
