import express from 'express';
import dotenv from 'dotenv';
import { connectDB, sequelize } from './config/db.js';  
import cors from 'cors';
import morgan from 'morgan';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

connectDB();

sequelize.sync()
  .then(() => {
    console.log('Models synced with database');
  })
  .catch(err => {
    console.error('Error syncing models:', err);
  });

// Routes
app.get('/', (req, res) => {
  res.send('Recipe Finder API is running');
});



// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
