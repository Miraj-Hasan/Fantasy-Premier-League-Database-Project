import { updateTeam, transferOut, updateBalance } from "./query";

export default async function handler(req, res){
    if(req.method === 'POST'){
        try{
            const { id, playerBoxes, teamValue, remainingBalance, transferCost, availabeTransfer, transferDone, gameWeek } = req.body;
            //console.log('Inside saveCreatedTeam', availableTransfer);

            //const len = players.length;
            let start = [1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0];
            await updateBalance(id, teamValue, remainingBalance, transferCost, availabeTransfer, transferDone);
            await transferOut(id);
            for(let i = 0; i < 15; i++)
            {
                await updateTeam(id, playerBoxes[i], start[i], gameWeek);
            }
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