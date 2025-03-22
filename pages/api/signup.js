import { executeQuery, executeQueryWithoutReturn } from "./query";
import jwt from "jsonwebtoken";

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const { formData, gameWeek } = req.body;
            const checker = `SELECT * FROM "User" WHERE "Email" = :1`;
            console.log('checker', checker)
            const duplicates = await executeQuery(checker, [formData.email]);
            console.log('duplicates', duplicates.length)
            if (duplicates.length > 0) {

                res.status(401).json({ success: false, message: 'The Email already exists' });
            }
            else {
                const sql1 =
                    `DECLARE
                    pID NUMBER;
                    pass VARCHAR2(255);
                BEGIN
                    pID := "FPL_PROJECT"."USERIDNUMBER".NEXTVAL;
                    pass := dbms_crypto.hash(utl_i18n.string_to_raw (:1, 'AL32UTF8'), dbms_crypto.hash_sh1);
                    INSERT INTO "User"("UserName", "UserId", "Email", "Password", "Country", "FavClub") VALUES(:2, pID, :3, pass, :4, :5);
	                INSERT INTO "FPL_PROJECT"."Team" ("TeamName", "TeamValue", "TeamBalance", "TotalPoints", "TeamId", "TransferAvailable", "OwnerId", "StartingGW", "TransferCost", "TransferDone")
                     VALUES(:6, '100.0', '0.0', '0', "FPL_PROJECT"."TEAMIDNUMBER".NEXTVAL, '9999', pID, :7, '0', '0');
                END;`
                    ;
                await executeQueryWithoutReturn(sql1, [formData.password, formData.username, formData.email, formData.country, formData.favClub, formData.teamname, gameWeek]);
                console.log('abcd');
                const sql2 =
                    `SELECT *
                    FROM "User" JOIN "Team"
                    ON "UserId" = "OwnerId"
                    WHERE "Email" = :1
                `;

                const result = await executeQuery(sql2, [formData.email]);
                const token = jwt.sign({ authenticated: true }, process.env.SECRET);
                console.log(result)
                res.status(200).json({ success: true, result, token: token });

            }
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ success: false, message: 'An error occurred' });
        }
    }
    else {
        res.status(405).json({ success: false, message: 'Method not allowed' });
    }
}