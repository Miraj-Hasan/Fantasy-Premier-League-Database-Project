const { oracledb, initialize } = require('./connect');

export default async function handler(req, res){
    
    if(req.method === 'GET'){
        try{
            try{
                const currentPool = oracledb.getPool();
            } catch{
                initialize();
            }
            
            res.status(200).json({ success: true, message: 'Login successful' });
    
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