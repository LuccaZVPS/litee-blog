import { app } from "./infra/server/app";
import mongoose from "mongoose";
import { connect } from "amqplib";
import { categoryCreatedPubliser } from "./events/publishers/category-created-publisher";
import { categoryDeletedPubliser } from "./events/publishers/category-deleted-publisher";
const startup = async () => {
  const connection = await connect(
    process.env.RABBITMQ_URL || "amqp://rabbitmq:5672"
  );
  await categoryCreatedPubliser.start(connection);
  await categoryDeletedPubliser.start(connection);
  await mongoose.connect(
    process.env.MONGO_URL || "mongodb://mongo-auth:27017/auth"
  );
  app.listen(process.env.PORT || 3002);
  console.log("Server running!");
};
startup();
