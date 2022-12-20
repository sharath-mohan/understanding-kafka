const { Kafka } = require("kafkajs");

async function run() {
  try {
    const kafka = new Kafka({
      clientId: "myapp",
      brokers: ["127.0.0.1:29092"],
    });
    const admin = await kafka.admin();
    console.log("connecting...");
    await admin.connect();
    console.log("connected");
    const topic = await admin.createTopics({
      topics: [
        {
          topic: "Products",
          numPartitions: 2,
        },
      ],
    });
    console.log("Created succesfully");
    await admin.disconnect();
  } catch (e) {
    console.log("error produced", e);
  }
}
run();
