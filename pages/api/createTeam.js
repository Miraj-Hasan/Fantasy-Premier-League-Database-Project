import { getPlayerNames } from "./query";

export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            let { position } = req.query;
            if(position==='GKP1' ||position ==='GKP2')
            position='GKP'
            if(position==='DEF1' ||position ==='DEF2'|| position ==='DEF3'|| position ==='DEF4'||position ==='DEF5')
            position='DEF'
            if(position==='MID1' ||position ==='MID2'|| position ==='MID3'|| position ==='MID4'||position ==='MID5')
            position='MID'
            if(position==='FWD1' ||position ==='FWD2'|| position ==='FWD3')
            position='FWD'
            const playerNames = await getPlayerNames(position,"Price");

            res.status(200).json({ success: true, playerNames });
        } catch (error) {
            console.error('Error:', error);
            res.status(500).json({ success: false, message: 'An error occurred' });
        }
    } else {
        res.status(405).json({ success: false, message: 'Method not allowed' });
    }
}