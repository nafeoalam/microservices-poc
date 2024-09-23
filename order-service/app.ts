import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS
app.use(cors());

// Other middleware and routes...
