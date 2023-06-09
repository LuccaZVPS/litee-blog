import { Amqp } from "@litee-blog/shared/infra/broker/amqpliib";
export const amqp = new Amqp();
const startup = async () => {
  await amqp.start("amqp://localhost:5672");
};
