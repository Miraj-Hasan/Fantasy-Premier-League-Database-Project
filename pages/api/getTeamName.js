import { user } from "../dbConfig";
import { executeQuery } from "./query";

export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            let { userId } = req.query;

            const sql = `
                SELECT "UserName", "TeamName"
                FROM "User" JOIN "Team"
                ON "UserId" = "OwnerId"
                WHERE "UserId" = :1
            `;

            const names = await executeQuery(sql, [userId]);
            res.status(200).json({ success: true, names });
        } catch (error) {
            console.error('Error:', error);
            res.status(500).json({ success: false, message: 'An error occurred' });
        } 
    }
    else {
        res.status(405).json({ success: false, message: 'Method not allowed' });
    }

}