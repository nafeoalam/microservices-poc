import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import inventoryRoutes from './routes/inventory.routes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3003;

// Enable CORS
app.use(cors());

// Middleware
app.use(express.json());

// TODO: MongoDB connection
// mongoose.connect(process.env.MONGODB_URI as string)
// .then(() => console.log('MongoDB connected'))
// .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/inventory', inventoryRoutes);

// Error handling middleware
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`INVENTORY SERVICE is running on http://localhost:${PORT}`);
});
