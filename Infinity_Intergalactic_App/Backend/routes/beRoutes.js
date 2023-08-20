import { Router } from 'express';
const router = Router();
import { connectToDatabase, client } from '../database/beDb';

// Use connectToDatabase to connect to the database
connectToDatabase();

// Import your controllers and other modules here
import { getData, createData } from '../controllers/beControllers';

// Define routes
router.get('/get-data', getData);

router.post('/create-data', createData);

export default router;