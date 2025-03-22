import next from "next";
import { connectString } from "../dbConfig";
import { executeQuery, executeQueryWithoutReturn } from "./query";

export default async function handler(req, res){
    if(req.method === 'POST'){
        try{
            const { selectedGW, timestamp } = req.body;
            //const date = new Date(timestamp);
            //console.log(date);


            // Parse the original date-time string
            const parsedDate = new Date(timestamp);
            const finishdate = new Date(timestamp);
            finishdate.setDate(finishdate.getDate() + 3);

            // Format date components (year, month, day)
            const year = parsedDate.getFullYear();
            const year1 = finishdate.getFullYear();
            const month = String(parsedDate.getMonth() + 1).padStart(2, '0'); // Month is 0-based, so add 1
            const month1 = String(finishdate.getMonth() + 1).padStart(2, '0'); // Month is 0-based, so add 1

            const day = String(parsedDate.getDate()).padStart(2, '0');
            const day1 = String(finishdate.getDate()).padStart(2, '0');

            //console.log('month', month);
            // Format time components (hours, minutes, seconds, milliseconds)
            const hours = String(parsedDate.getUTCHours()).padStart(2, '0');
            const minutes = String(parsedDate.getUTCMinutes()).padStart(2, '0');
            const seconds = String(parsedDate.getUTCSeconds()).padStart(2, '0');
            const milliseconds = String(parsedDate.getUTCMilliseconds()).padStart(3, '0');

            const hours1 = String(finishdate.getUTCHours()).padStart(2, '0');
            const minutes1 = String(finishdate.getUTCMinutes()).padStart(2, '0');
            const seconds1 = String(finishdate.getUTCSeconds()).padStart(2, '0');
            const milliseconds1 = String(finishdate.getUTCMilliseconds()).padStart(3, '0');

            // Combine the formatted components into the desired timestamp format
            const time = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}.${milliseconds}`;
            const time1 = `${year1}-${month1}-${day1} ${hours1}:${minutes1}:${seconds1}.${milliseconds1}`;


            const tempdate = new Date(time);

            //console.log(time);

            const sql1 = `
                SELECT "EndDate"
                FROM "GameWeek" WHERE "gwId" = :1
            `;
            const result = await executeQuery(sql1, [selectedGW-1]);
            const prevDate = new Date(result[0].EndDate);

            if(prevDate >= tempdate) {
                res.status(500).json({ success: false, message: 'The date collides with the previous Gameweek' });
                return;
            }

            if(selectedGW !== 10) {
                const sql2 = `
                    SELECT "StartDate"
                    FROM "GameWeek" WHERE "gwId" = :1
                `;
                const output = await executeQuery(sql2, [parseInt(selectedGW)+1]);
                console.log('ouput',output);
                const nextDate = new Date(output[0].StartDate);
                nextDate.setDate(nextDate.getDate() - 4);
                console.log(tempdate + 4);

                if(nextDate <= tempdate) {
                    //console.log('asdsf');
                    res.status(500).json({ success: false, message: 'The date collides with the next Gameweek' });
                    return;
                }    
            }
            
            
            const sql = `
                 UPDATE "GameWeek" SET "StartDate" = TO_TIMESTAMP(:1, 'YYYY-MM-DD HH24:MI:SS.FF6'), "EndDate" = TO_TIMESTAMP(:2, 'YYYY-MM-DD HH24:MI:SS.FF6')
                 WHERE "gwId" = :3
            `;
            console.log(time);
            await executeQueryWithoutReturn(sql, [time, time1, selectedGW]);

            res.status(200).json({ success: true,  message: 'Substitution updated' });
        }
        catch(error){
            console.error(error);
            res.status(500).json({ success: false, message: 'An error occurred' });
        }
    }
    else{
        res.status(405).json({ success: false, message: 'Method not allowed' });
    }
}