import { ConfirmChannel, Connection, ConsumeMessage } from "amqplib";

export abstract class Event {
  private channel!: ConfirmChannel;
  private exchangeName: string;
  private queue: string;
  constructor(config: IEvent) {
    this.exchangeName = config.exchange;
    this.queue = `${config.service}/${config.exchange}`;
  }
  async start(connection: Connection) {
    this.channel = await connection.createConfirmChannel();
    await this.channel.assertExchange(this.exchangeName, "fanout", {
      durable: true,
    });
    return this;
  }

  async publisher<T>(data: T) {
    const message = Buffer.from(JSON.stringify(data));
    this.channel.publish(this.exchangeName, "", message, { persistent: true });
    await this.channel.waitForConfirms();
  }

  async listener<T>(cb: (data: T) => Promise<void>) {
    await this.channel.assertQueue(this.queue, { durable: true });
    await this.channel.bindQueue(this.queue, this.exchangeName, "");
    return this.channel.consume(
      this.queue,
      async (msg: ConsumeMessage | null) => {
        if (!msg) {
          return;
        }
        try {
          const data: T = JSON.parse(msg.content.toString());
          await cb(data);
          this.channel.ack(msg);
        } catch (e) {
          console.log(e);
        }
      }
    );
  }
}

interface IEvent {
  exchange: string;
  service: string;
}
