import { app } from "./infra/server/app";
import mongoose from "mongoose";
import { connect } from "amqplib";
import { accountCreatedPublisher } from "./events/publishers/account-created-publisher";
import { accountUpdatedListener } from "./events/listeners/account-updated-listener";
const startup = async () => {
  await mongoose.connect(
    process.env.MONGO_URL || "mongodb://mongo-auth:27017/auth"
  );
  const connection = await connect(
    process.env.RABBITMQ_URL || "amqp://rabbitmq:5672"
  );
  await accountCreatedPublisher.start(connection);
  await (await accountUpdatedListener.start(connection)).listen();
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log("Server running on " + port);
  });
};
startup();
