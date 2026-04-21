import { createServer } from 'http';
import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import userRoutes from './src/routes/userRoutes.js';
import { createSocketServer } from './src/socket/index.js';

const app = express();
const PORT = process.env.PORT || 3000;

const corsOptions = {
  origin: process.env.CLIENT_URL || 'http://localhost:5173',
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(userRoutes);

const httpServer = createServer(app);

createSocketServer(httpServer, corsOptions);

httpServer.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
