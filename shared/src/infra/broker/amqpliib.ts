import { ConfirmChannel, Connection, connect, ConsumeMessage } from "amqplib";
export class Amqp {
  connection!: Connection;
  channel!: ConfirmChannel;
  async start(url: string): Promise<void> {
    this.connection = await connect(url);
    this.channel = await this.connection.createConfirmChannel();
  }
  async publish<T>(queue: string, data: T) {
    this.channel.sendToQueue(queue, Buffer.from(JSON.stringify(data)), {
      persistent: true,
    });
    await this.channel.waitForConfirms();
  }
  async listen<T>(queue: string, cb: (data: T) => Promise<void>) {
    return this.channel.consume(queue, async (msg: ConsumeMessage | null) => {
      if (!msg) {
        return;
      }
      const data: T = JSON.parse(msg.content.toString());
      await cb(data);
      this.channel.ack(msg);
    });
  }
  async assertQueue(queue: string) {
    await this.channel.assertQueue(queue, { durable: true });
  }
}
