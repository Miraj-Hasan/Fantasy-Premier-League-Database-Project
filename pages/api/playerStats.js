import { getStats } from "./query";

export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            let { playerId } = req.query;
            const stats = await getStats(playerId);
            res.status(200).json({ success: true, stats });
        } catch (error) {
            console.error('Error:', error);
            res.status(500).json({ success: false, message: 'An error occurred' });
        } 
    }
    else {
        res.status(405).json({ success: false, message: 'Method not allowed' });
    }

}