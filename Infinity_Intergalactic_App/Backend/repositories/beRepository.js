const { client } = require('../database/beDb').default; // Import the MongoDB client from your db configuration

const collection = client.db('mydatabase').collection('mycollection');

async function insertData(dataToInsert) {
  try {
    const result = await collection.insertOne(dataToInsert);
    console.log('Document inserted:', result.insertedId);
  } catch (error) {
    console.error('Error inserting document:', error);
    throw error; // Propagate the error to handle it in higher levels
  }
}

module.exports = {
  insertData,
};


