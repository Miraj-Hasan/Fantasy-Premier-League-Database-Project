import { oracledb, initialize } from './connect';
import { executeQuery } from "./query";
import jwt from 'jsonwebtoken'

export default async function handler(req, res) {
    /*try {
        const currentPool = oracledb.getPool();
    } catch {
        initialize();
    }*/
    if (req.method === 'POST') {
        try {
            const { formData, loginType } = req.body;
            const email = formData.email;
            const password = formData.password;
            // const isCorrect = await checkLoginInfo(email, password);
            const sql = `
                    BEGIN
                    LOGIN(:EMAIL,:PASSWORD,:STATUS);
                    END;
                    `;
            const binds = {
                EMAIL: { dir: oracledb.BIND_IN, type: oracledb.STRING, val: email },
                PASSWORD: { dir: oracledb.BIND_IN, type: oracledb.STRING, val: password },
                STATUS: { dir: oracledb.BIND_OUT, type: oracledb.STRING }
            };
            let connection;

            connection = await oracledb.getConnection('default');
            const result = await connection.execute(sql, binds);
            console.log(result.outBinds.STATUS);
            if (result.outBinds.STATUS === 'SUCCESSFUL') {

                if(loginType === 'User' && email === 'admin@gmail.com') {
                    res.status(401).json({ success: false, message: 'Invalid Username or Password' });
                }
                else if(loginType === 'User' && email !== 'admin@gmail.com') {

                    const sql2 = `SELECT "UserId", "TeamName" FROM "User" JOIN "Team" ON "UserId" = "OwnerId" WHERE "Email" = :1`;
                    const output = await executeQuery(sql2, [email]);

                    const token = jwt.sign({ authenticated: true }, process.env.SECRET);

                    //console.log('token', token);
                    res.status(200).json({ success: true, output, token: token });
                }
                else if(loginType === 'Admin' && email === 'admin@gmail.com') {
                    const token = jwt.sign({ authenticated: true }, process.env.SECRET);

                    //console.log('token', token);
                    res.status(200).json({ success: true, token: token });
                }
                else if(loginType === 'Admin' && email !== 'admin@gmail.com') {
                    res.status(401).json({ success: false, message: 'Invalid Username or Password' });
                }

            }
            else {
                res.status(401).json({ success: false, message: 'Invalid Username or Password' });
            }
            if (connection)
                connection.close();
            //res.json({ message: result.outBinds.STATUS, success: false })
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ success: "false", message: 'An error occurred' });
        }
    }
    else {
        res.status(405).json({ success: "false", message: 'Method not allowed' });
    }
}