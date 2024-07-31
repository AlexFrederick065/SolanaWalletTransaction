import express from 'express';
import {getTransactionData} from '../services/transactionService.mjs';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router()
const walletAddress = process.env.WALLET_ADDRESS;

router.get('/transactions', async(req,res) => {
    try{
        const transaction = await getTransactionData(walletAddress);
        res.json(transaction);
    }catch(error){
        res.status(500).json({
            error:error.message 
        });
    }
})

export default router;