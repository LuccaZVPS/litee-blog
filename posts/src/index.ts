import { PrismaClient } from "@prisma/client";
import { app } from "./infra/server/app";
import { categoryCreatedListener } from "./listeners/category-created-listener";
import { categoryDeletedListener } from "./listeners/category-deleted-listener";
import { categoryUpdatedListener } from "./listeners/category-updated-listener";
import { accountCreatedListner } from "./listeners/account-created-listener";
import { connect } from "amqplib";
export const prisma = new PrismaClient();
const startup = async () => {
  const channel = await connect(
    process.env.RABBITMQ_URL || "amqp://rabbitmq:5672"
  );
  await (await accountCreatedListner.start(channel)).listen();
  await (await categoryCreatedListener.start(channel)).listen();
  await (await categoryDeletedListener.start(channel)).listen();
  await (await categoryUpdatedListener.start(channel)).listen();

  app.listen(process.env.PORT || 3000);
  console.log("Server running!");
};
startup();
