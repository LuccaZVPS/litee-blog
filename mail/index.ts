import { connect } from "amqplib";
import { config } from "dotenv";
import { accountCreatedListener } from "./events/listeners/account-created-listener";
config();
(async () => {
  try {
    const connection = await connect(
      process.env.RABBITMQ_URL || "amqp://rabbitmq:5672"
    );
    (await accountCreatedListener.start(connection)).listen();
    console.log("Running");
  } catch (e) {
    console.log(e);
  }
})();
