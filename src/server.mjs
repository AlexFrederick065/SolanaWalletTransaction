import express from 'express' 
import dotenv from 'dotenv';
import transactionRoutes from './routes/transactions.mjs'

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/api', transactionRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });