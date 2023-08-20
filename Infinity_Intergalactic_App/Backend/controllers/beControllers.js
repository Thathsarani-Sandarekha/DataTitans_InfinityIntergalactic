exports.getData = (req, res) => {
// Implement logic to fetch data from the database and send a response
};
  
const dataRepository = require('../repositories/dataRepository');

async function createData(req, res) {
    const dataToInsert = {
        name: 'John Doe',
        email: 'john@example.com',
    };

    const query = req.body;
    console.log('query', query);

    

    try {
        await dataRepository.insertData(dataToInsert);
        res.status(201).json({ message: 'Data inserted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'An error occurred while inserting data' });
    }
}

module.exports = {
    createData,
};
