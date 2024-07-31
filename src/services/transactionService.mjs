import axios from 'axios';

export const getTransactionData = async (address) => {
    try{
        const res = await axios.post("https://api.mainnet-beta.solana.com",{
            "jsonrpc": "2.0",
            "id": 1,
            "method": "getSignaturesForAddress",
            "params": [
                address
            ]
        },{
            headers: {
                'Content-Type': 'application/json'
                }
        });
        if(res.data && res.data.result){
            return res.data
        }else{
            throw new Error ("No Transaction Found")
        }
    }catch (error){
        console.error('Error fetching transaction data:', error);
        throw new Error("Failed to fetch Transaction")
    }
}