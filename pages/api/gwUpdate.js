import { executeQuery, executeQueryWithoutReturn } from "./query";

export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            //let { userId } = req.query;
            const sql1 = `
              SELECT "Details" FROM "Info" WHERE "Event" = 'CurrentGW'
            `;
            const info = await executeQuery(sql1);
            let currentGW = info[0].Details;

            const sql2 = `
                SELECT "StartDate"
                FROM "GameWeek"
                WHERE "gwId" = :1
                AND "StartDate" <= SYSDATE
            `;
            const temp = await executeQuery(sql2, [currentGW+1]);

            if(temp.length > 0) {
                currentGW = currentGW+1;
                const sql3 = `
                    UPDATE "Info" SET "Details" = :1 WHERE "Event" = 'CurrentGW'
                `;
                await executeQueryWithoutReturn(sql3, [currentGW]);
            }

            res.status(200).json({ success: true, currentGW });
        } catch (error) {
            console.error('Error:', error);
            res.status(500).json({ success: false, message: 'An error occurred' });
        } 
    }
    else {
        res.status(405).json({ success: false, message: 'Method not allowed' });
    }

}