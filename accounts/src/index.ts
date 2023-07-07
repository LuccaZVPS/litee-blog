import { app } from "./infra/server/app";
import { connect } from "amqplib";
import { accountUpdatedPublisher } from "./events/publishers/account-updated-publisher";
import { accountVerifiedPublisher } from "./events/publishers/account-verified-publisher";
import { accountCreatedPublisher } from "./events/publishers/account-created-publisher copy";
const startup = async () => {
  const connection = await connect(
    process.env.RABBITMQ_URL || "amqp://rabbitmq:5672"
  );
  await accountUpdatedPublisher.start(connection);
  await accountVerifiedPublisher.start(connection);
  await accountCreatedPublisher.start(connection);

  app.listen(process.env.PORT || 3000);
  console.log("Server running!");
};
startup();
