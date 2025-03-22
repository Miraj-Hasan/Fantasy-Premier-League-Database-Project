import { executeQuery } from "./query";

export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            //let { userId } = req.query;
            const sql = `
                SELECT "gwId", "StartDate"
                FROM "GameWeek"
                ORDER BY "gwId"
            `;
            const gwInfo = await executeQuery(sql);
            //console.log(players);
            res.status(200).json({ success: true, gwInfo });
        } catch (error) {
            console.error('Error:', error);
            res.status(500).json({ success: false, message: 'An error occurred' });
        } 
    }
    else {
        res.status(405).json({ success: false, message: 'Method not allowed' });
    }

}