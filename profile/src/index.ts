import { PrismaClient } from "@prisma/client";
import { app } from "./infra/server/app";
import { Amqp } from "@litee-blog/shared/infra/broker/index";
export const prisma = new PrismaClient();
export const amqp = new Amqp();
const startup = async () => {
  await amqp.start(process.env.RABBITMQ_URL || "amqp://rabbitmq:5672");
  app.listen(process.env.PORT || 3000);
  console.log("Server running!");
};
startup();
