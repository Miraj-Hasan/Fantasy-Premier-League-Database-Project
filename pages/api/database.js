import { executeQuery } from './query';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const sql = `SELECT * FROM "Player" WHERE "Club" = :1`;
      //console.log('not anything');
      const binds = ['MCI'];
      const result = await executeQuery(sql, binds);
      console.log(result);
      res.status(200).json(result.rows);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'An error occurred' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}