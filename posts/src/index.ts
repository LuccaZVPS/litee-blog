import { PrismaClient } from "@prisma/client";
import { app } from "./infra/server/app";
import { categoryCreatedListener } from "./events/listeners/category-created-listener";
import { categoryDeletedListener } from "./events/listeners/category-deleted-listener";
import { categoryUpdatedListener } from "./events/listeners/category-updated-listener";
import { accountverifiedListner } from "./events/listeners/account-verified-listener";
import { connect } from "amqplib";
import { accountUpdatedListner } from "./events/listeners/account-updated-listener";
export const prisma = new PrismaClient();
const startup = async () => {
  const channel = await connect(
    process.env.RABBITMQ_URL || "amqp://rabbitmq:5672"
  );
  await (await accountverifiedListner.start(channel)).listen();
  await (await categoryCreatedListener.start(channel)).listen();
  await (await categoryDeletedListener.start(channel)).listen();
  await (await categoryUpdatedListener.start(channel)).listen();
  await (await accountUpdatedListner.start(channel)).listen();

  app.listen(process.env.PORT || 3000);
  console.log("Server running!");
};
startup();
