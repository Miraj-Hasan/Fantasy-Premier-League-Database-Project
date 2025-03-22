import { updateSubs } from "./query";
const { oracledb, initialize } = require('./connect');

export default async function handler(req, res){
    /*try{
        const currentPool = oracledb.getPool();
      } catch{
        initialize();
      }*/
    if(req.method === 'POST'){
        try{
            const { id, players } = req.body;
            //console.log('in the backend');
            //console.log(id, players[0].starting);
            //console.log('team info backend',teamId, playerId, starting);
            for(let i = 0; i < 15; i++)
            {
                await updateSubs(id, players[i].id, players[i].starting);
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