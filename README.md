# Learning Kafka

## Installation instructions

### creating Zookeeper container

```sh
docker run --name zookeeper -p 2181:2181 zookeeper
```

### creating kafka contrainer

```sh
docker run -p 9092:9092 --name kafka  -e KAFKA_ZOOKEEPER_CONNECT=scarlett:2181 -e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://scarlett:9092 -e KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1 -d confluentinc/cp-kafka

```

by default in spins up 3 brokers, spin up 1

## Whats the project about?

This is a basic guide with the following programs

1. topic.js - for setting up and configuting topic
2. Producer.js- sending data to kafka broker
3. consumer.js - consuming data from kafka broker

## License

1. This project has been licensed with an [MIT](https://choosealicense.com/licenses/mit/) license
1. A Github star would be really great :blush:

## About Me

Hello, I am Sharath, a self-taught web developer and designer. I mostly work with front-end development using React, Angular .

## Stay in Loop

If you would like to know when I release new resources , you can follow on [LinkedIn](https://www.linkedin.com/in/sharath-mohan-855515141/), [Twitter](https://twitter.com/sharathmohan007)
