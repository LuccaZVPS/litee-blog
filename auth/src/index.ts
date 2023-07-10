import { app } from "./infra/server/app";
import { connect } from "amqplib";
import { accountUpdatedListener } from "./events/listeners/account-updated-listener";
import { accountVerifiedListener } from "./events/listeners/account-verified-listener";
const startup = async () => {
  const connection = await connect(
    process.env.RABBITMQ_URL || "amqp://rabbitmq:5672"
  );
  (await accountVerifiedListener.start(connection)).listen();
  await (await accountUpdatedListener.start(connection)).listen();
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log("Server running on " + port);
  });
};
startup();
