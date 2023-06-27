import { app } from "./infra/server/app";
import { accountCreatedListener } from "./listeners/account-created-listener";
import mongoose from "mongoose";
import { connect } from "amqplib";
const startup = async () => {
  await mongoose.connect(
    process.env.MONGO_URL || "mongodb://mongo-auth:27017/accounts"
  );
  const connection = await connect(
    process.env.RABBITMQ_URL || "amqp://rabbitmq:5672"
  );
  await (await accountCreatedListener.start(connection)).listen();
  app.listen(process.env.PORT || 3000);
  console.log("Server running!");
};
startup();
