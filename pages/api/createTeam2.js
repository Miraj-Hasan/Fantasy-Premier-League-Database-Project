import { getSortedPlayers } from "./query";

export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            let { position, sorting, searchText, minPrice, maxPrice, gameWeek } = req.query;
            searchText = searchText.toLowerCase();
            
            const players = await getSortedPlayers(position, sorting, searchText, minPrice, maxPrice, gameWeek);
            res.status(200).json({ success: true, players });
        } catch (error) {
            console.error('Error:', error);
            res.status(500).json({ success: false, message: 'An error occurred' });
        } 
    }
    else {
        res.status(405).json({ success: false, message: 'Method not allowed' });
    }

}