import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3004;

// Enable CORS
app.use(cors());

// Middleware
app.use(express.json());

// Routes
// app.use('/api/order', inventoryRoutes);

// Error handling middleware
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`ORDER SERVICE is running on http://localhost:${PORT}`);
});
