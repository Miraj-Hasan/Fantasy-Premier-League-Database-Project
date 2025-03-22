import { executeQuery } from "./query";

export default async function handler(req, res) {
    if(req.method === 'GET') {
        try {
            //const gwID = 3;
            let { gameWeekId } = req.query;
            //console.log(gameWeekId);
            const sql = `SELECT "HomeTeamId", "AwayTeamId", "FixtureId", "GameWeekId",C1."Logo" AS "HomeTeamLogo",C2."Logo" AS "AwayTeamLogo",
            "HomeTeamScore","AwayTeamScore" 
            FROM "Fixture" JOIN "Clubs" C1 
            ON "HomeTeamId" = C1."ClubShortName"
            JOIN "Clubs" C2
            ON "AwayTeamId" = C2."ClubShortName"
            WHERE "GameWeekId" =: 1` ;
            const binds=[gameWeekId];
            const result = await executeQuery(sql, binds);
            //console.log('abcdefg');
            //console.log(result[0]);
            res.status(200).json({ success: true, result });
            //console.log('abcdefg');
        }
        catch(error) {
            console.error(error);
            res.status(500).json({ success: false, message: 'An error occured!' });
        }
    }
    else {
        res.status(405).json({ success: false, message: 'Unallowed method' });
    }
}