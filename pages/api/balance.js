import { getBalance } from "./query";

export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            let { userId } = req.query;
            const balances = await getBalance(userId);
            //console.log(players);
            res.status(200).json({ success: true, balances });
        } catch (error) {
            console.error('Error:', error);
            res.status(500).json({ success: false, message: 'An error occurred' });
        } 
    }
    else {
        res.status(405).json({ success: false, message: 'Method not allowed' });
    }

}