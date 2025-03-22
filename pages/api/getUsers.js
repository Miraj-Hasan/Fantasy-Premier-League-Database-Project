import { executeQuery } from "./query";

export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            let { gameWeek } = req.query;

            const sql = `
                SELECT * 
                FROM "User" JOIN "Team"
                ON "OwnerId" = "UserId"
                JOIN "GWpoint"
                ON "UserId" = "UserID" AND "GWID" = :1
                ORDER BY "TotalPoints" DESC
            `;

            const users = await executeQuery(sql, [gameWeek]);
            res.status(200).json({ success: true, users });
        } catch (error) {
            console.error('Error:', error);
            res.status(500).json({ success: false, message: 'An error occurred' });
        } 
    }
    else {
        res.status(405).json({ success: false, message: 'Method not allowed' });
    }

}