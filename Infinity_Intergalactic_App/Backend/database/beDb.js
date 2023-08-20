import { MongoClient } from 'mongodb';

const uri = "mongodb+srv://nisulihettiarachchi:NN0mTkjF7dKfihcA@cluster0.jptaxxz.mongodb.net/?retryWrites=true&w=majority";  // Replace with your MongoDB connection URI
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectToDatabase() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

export default {
  connectToDatabase,
  client,  // Export the client instance for use in other parts of your backend
};
