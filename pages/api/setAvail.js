import { executeQueryWithoutReturn } from "./query";

export default async function handler(req, res){
    if(req.method === 'POST'){
        try{
            const { playerId, selectedAvailability } = req.body;
            const sql = `
                UPDATE "Player" SET "Availability" = :1 WHERE "P_ID" = :2
            `;
            await executeQueryWithoutReturn(sql, [selectedAvailability, playerId]);

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