const { Kafka } = require("kafkajs");
async function run() {
  try {
    const kafka = new Kafka({
      clientId: "myapp",
      brokers: ["127.0.0.1:29092"],
    });
    const consumer = await kafka.consumer({ groupId: "test" });
    console.log("connecting...");
    await consumer.connect();
    console.log("connected");
    await consumer.subscribe({
      topic: "Products",
      fromBeginning: true,
    });
    await consumer.run({
      eachMessage: async (res) =>
        console.log(`${res.message.value},${res.partition}`),
    });
  } catch (e) {
    console.log("error occured", e);
  }
}
run();
