import { connect } from 'amqplib';
import axios from 'axios';

const queue = 'updateItemQueue';

async function start() {
  const connection = await connect('amqp://localhost');
  const channel = await connection.createChannel();
  await channel.assertQueue(queue);

  console.log('Waiting for messages in %s', queue);
  channel.consume(queue, async (msg) => {
    if (msg !== null) {
      const { productId } = JSON.parse(msg.content.toString());
      console.log('Received message:', productId);

      // Make the API call to update the inventory
      try {
        await axios.put(`http://localhost:3003/api/inventory/${productId}`, {
          message: 'Inventory updated',
        });
        console.log(`Inventory updated for product ID: ${productId}`);
      } catch (error) {
        console.error('Error updating inventory:', error.message);
      }

      channel.ack(msg); // Acknowledge the message
    }
  });
}

start().catch(console.error);
