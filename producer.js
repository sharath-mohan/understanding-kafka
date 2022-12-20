const { Kafka } = require("kafkajs");
const msg = process.argv[2];
const parition = msg[0] < "N" ? 0 : 1;
async function run() {
  try {
    const kafka = new Kafka({
      clientId: "myapp",
      brokers: ["127.0.0.1:29092"],
    });
    const producer = await kafka.producer();
    console.log("connecting...");
    await producer.connect();
    console.log("connected");
    const result = await producer.send({
      topic: "Products",
      messages: [
        {
          value: msg,
          partition: parition,
        },
      ],
    });
    console.log(`${JSON.stringify(result)}`);
    await producer.disconnect();
  } catch (e) {
    console.log("error occured", e);
  }
}
run();
