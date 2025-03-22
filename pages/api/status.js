import { executeQuery } from "./query";

export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            let { userId, gameWeek } = req.query;
            const sql = `
                SELECT * 
                FROM "User" JOIN "Team"
                ON "OwnerId" = "UserId"
                JOIN "GWpoint"
                ON "UserId" = "UserID" AND "GWID" = :1
                WHERE "UserId" = :2
            `;

            const infos = await executeQuery(sql, [gameWeek, userId]);
            res.status(200).json({ success: true, infos });
        } catch (error) {
            console.error('Error:', error);
            res.status(500).json({ success: false, message: 'An error occurred' });
        } 
    }
    else {
        res.status(405).json({ success: false, message: 'Method not allowed' });
    }

}