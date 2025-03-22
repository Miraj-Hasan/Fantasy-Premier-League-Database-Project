import { executeQuery, executeQueryWithoutReturn } from "./query";

export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            let { userId } = req.query;
            const sql = `
                SELECT "MESSAGE"
                FROM "Notification"
                WHERE "USER_ID" = :1
            `;
            const notices = await executeQuery(sql, [userId]);
            //console.log(notices);

            const sql2 = `
                DELETE FROM "Notification"
                WHERE "USER_ID" = :1
            `;
            await executeQueryWithoutReturn(sql2, [userId]);

            res.status(200).json({ success: true, notices });
        } catch (error) {
            console.error('Error:', error);
            res.status(500).json({ success: false, message: 'An error occurred' });
        } 
    }
    else {
        res.status(405).json({ success: false, message: 'Method not allowed' });
    }

}