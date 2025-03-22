import { executeQueryWithoutReturn } from "./query";

export default async function handler(req, res){
    if(req.method === 'POST'){
        try{
            const { id } = req.body;
            const sql = `
                 DELETE FROM "User" WHERE "UserId" = :1
            `;
            await executeQueryWithoutReturn(sql, [id]);

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