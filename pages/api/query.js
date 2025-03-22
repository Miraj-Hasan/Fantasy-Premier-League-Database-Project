const { oracledb, initialize } = require('./connect');


async function executeQuery(sql, binds = [], options = {}) {
  let connection;
  /*try{
    const currentPool = oracledb.getPool();
  } catch{
    initialize();
  }*/
  try {
    connection = await oracledb.getConnection('default');
    const result = await connection.execute(sql, binds, options);
    return result.rows;
  } catch (error) {
    throw error;
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (error) {
        console.error(error);
      }
    }
  }
}


async function getPlayerNames(position, sort) {
  const sql = `SELECT ("FirstName" || ' ' || "LastName") AS "FullName", "P_ID", "Position", "Club", "Price" FROM "Player" WHERE "Position" = :1 ORDER BY "${sort}" DESC`;
  const binds = [position];
  
  try {
    const result = await executeQuery(sql, binds);
    return result;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}


async function executeQueryWithoutReturn(sql, binds = [], options = {}) {
  let connection;
  try{
    const currentPool = oracledb.getPool();
  } catch{
    initialize();
  }
  try {
    connection = await oracledb.getConnection('default');
    await connection.execute(sql, binds, options);
  } catch (error) {
    throw error;
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (error) {
        console.error(error);
      }
    }
  }
}



async function checkLoginInfo(email, password){
  const sql = `SELECT * FROM "User" WHERE "Email" = :1 AND "Password" = :2`;
  const binds = [email, password];

  try{
    const result = await executeQuery(sql, binds);
    return result.length === 1;
  }
  catch(error){
    console.error('Error :', error);
    return false;
  }
}


async function getGwPlayers(userId, gameWeek) {
  const sql = `
    SELECT "Player"."P_ID", ("Player"."FirstName" || ' ' || "Player"."LastName") AS "FullName", "Player"."Club", "Player"."Position", "Fixture"."AwayTeamId", "Fixture"."HomeTeamId", "CurrentSquad"."Playing11", "Player"."Photo", "Availability"
    FROM "CurrentSquad" JOIN "Player"
    ON "CurrentSquad"."PlayerId" = "Player"."P_ID"
    JOIN "Fixture" 
    ON ("Fixture"."HomeTeamId" = "Player"."Club" OR "Fixture"."AwayTeamId" = "Player"."Club") 
    AND "Fixture"."GameWeekId" = :1
    WHERE "CurrentSquad"."T_ID" = :2
  `;
  try{
    const players = await executeQuery(sql, [gameWeek, userId]);
    return players;
  }
  catch(error) {
    console.error('Error :', error);
  }
}



async function getTeamPlayers(userId) {
  const sql = `
    SELECT "P_ID", ("Player"."FirstName" || ' ' || "Player"."LastName") AS "FullName", "Price", "Club", "Position", "Availability", "Playing11", "Photo"
    FROM "Player" JOIN "CurrentSquad"
    ON "PlayerId" = "P_ID"
    WHERE "T_ID" = :1
    ORDER BY "Position"
  `;
  try{
    const players = await executeQuery(sql, [userId]);
    return players;
  }
  catch(error) {
    console.error('Error :', error);
  }
}



async function getBalance(userId) {
  const sql = `
    SELECT "TeamValue", "TeamBalance", "TransferAvailable"
    FROM "Team"
    WHERE "OwnerId" = :1
  `;
  try{
    const balances = await executeQuery(sql, [userId]);
    return balances;
  }
  catch(error) {
    console.error('Error :', error);
  }
}





async function updateSubs(teamId, playerId, starting) {
  const sql = `
    UPDATE "CurrentSquad" SET "Playing11" = :1 WHERE "T_ID" = :2 AND "PlayerId" = :3
  `;
  try {
    await executeQueryWithoutReturn(sql, [starting, teamId, playerId]);
  }
  catch (error) {
    console.error(error);
  }
}


async function updateTeam(teamId, player, starting, gw) {
  const sql = `
    INSERT INTO "CurrentSquad" VALUES(:1, :2, :3)
  `;
  try {
    await executeQueryWithoutReturn(sql, [teamId, player.P_ID, starting]);
  }
  catch (error) {
    console.error(error);
  }
}


async function transferOut(teamId) {
  const sql = `
    DELETE FROM "CurrentSquad"
    WHERE "T_ID" = :1
  `;
  try {
    await executeQueryWithoutReturn(sql, [teamId]);
  }
  catch (error) {
    console.error(error);
  }
}

async function updateBalance(teamId, teamValue, bank, cost, availabeTransfer, transferDone) {
  console.log(transferDone, availabeTransfer, cost);
  let remainingTransfer;
  if(transferDone >= availabeTransfer)
    remainingTransfer = 0;
  else
    remainingTransfer = availabeTransfer-transferDone;
 
  const sql = `
      UPDATE "Team" SET "TeamValue" = :1, "TeamBalance" = :2, "TransferCost" = :3, "TransferAvailable" = :4, "TransferDone" = :5
      WHERE "OwnerId" = :6
  `;
  try {
    await executeQueryWithoutReturn(sql, [teamValue, bank, cost, remainingTransfer, transferDone, teamId]);
  }
  catch (error) {
    console.error(error);
  }
}

async function getPlayerPoints(userId, gameWeek) {
  const sql = `
    SELECT "Player"."P_ID", ("Player"."FirstName" || ' ' || "Player"."LastName") AS "FullName", "Player"."Club", "Player"."Position", "Fixture"."AwayTeamId", "Fixture"."HomeTeamId", "PrevSquad"."Playing11", "Points", "Player"."Photo"
    , CATEGORIZEPLAYERPERFORMANCE(:1,"Player".P_ID) AS "Cat1" , GETSELECTEDBYCATEGORY("Player".P_ID, :2) AS "Cat2"
    FROM "PrevSquad" JOIN "Player"
    ON "PrevSquad"."PlayerId" = "Player"."P_ID"
    JOIN "Fixture" 
    ON ("Fixture"."HomeTeamId" = "Player"."Club" OR "Fixture"."AwayTeamId" = "Player"."Club") 
    AND "Fixture"."GameWeekId" = :3
    JOIN "PlayerStats"
    ON ("Player"."P_ID" = "PlayerStats"."PlayerId" AND "PlayerStats"."GameWeekId" = :4)
    WHERE "PrevSquad"."T_ID" = :5
    AND "PrevSquad"."GameWeekId" = :6 
  `;
  try{
    const players = await executeQuery(sql, [gameWeek, gameWeek, gameWeek, gameWeek, userId, gameWeek]);
    return players;
    //console.log('inside query', players);
  }
  catch(error) {
    console.error('Error :', error);
  }

}


async function getStartingGW(userId) {
  const sql = `
    SELECT "StartingGW"
    FROM "Team"
    WHERE "OwnerId" = :1
  `;
  try{
    const info = await executeQuery(sql, [userId]);
    return info;
  }
  catch(error) {
    console.error('Error :', error);
  }

}



async function getStats(playerId) {
  const sql = `
    SELECT *
    FROM "PlayerStats" JOIN "Player"
    ON "PlayerId" = "P_ID"
    JOIN "Fixture"
    ON ("Fixture"."HomeTeamId" = "Player"."Club" OR "Fixture"."AwayTeamId" = "Player"."Club") 
    AND "Fixture"."GameWeekId" = "PlayerStats"."GameWeekId"
    WHERE "PlayerId" = :1
    ORDER BY "PlayerStats"."GameWeekId"
  `;
  try{
    const data = await executeQuery(sql, [playerId]);
    //console.log(data);
    return data;
  }
  catch(error) {
    console.error('Error :', error);
  }

}




async function getSortedPlayers(position, sortingCriteria, name, minPrice, maxPrice, gameWeek) {
  try {
    let sql;
    if(sortingCriteria === "Club" || sortingCriteria === "Price" ) {
        sql = `
          SELECT "P_ID", ("FirstName" || ' ' || "LastName") AS "FullName", "Player"."Club", "Position", "Price", "Availability", "${sortingCriteria}" AS "Criteria", "Photo"
          FROM "Player"
          WHERE "Position" = :1
          AND (LOWER("FirstName") LIKE '${name}%' OR LOWER("LastName")  LIKE '${name}%')
          AND "Price" >= :2 AND "Price" <= :3
          ORDER BY "${sortingCriteria}" DESC
        `;
    }
    else if(sortingCriteria === "SelectedBy") {
      sql = `
          SELECT "P_ID", ("FirstName" || ' ' || "LastName") AS "FullName", "Player"."Club", "Position", "Price", "Availability", GetSelectedByPercentage("P_ID", ${gameWeek-1}) AS "Criteria", "Photo"
          FROM "Player"
          WHERE "Position" = :1
          AND (LOWER("FirstName") LIKE '${name}%' OR LOWER("LastName")  LIKE '${name}%')
          AND "Price" >= :2 AND "Price" <= :3
          ORDER BY "Criteria" DESC
      `;
    }
    else {
      sql = `
        SELECT  "P_ID", ("Player"."FirstName" || ' ' || "Player"."LastName") AS "FullName", "Player"."Price", "Position", "Player"."Club" , "Player"."Availability", SUM("${sortingCriteria}") AS "Criteria", "Photo"
        FROM "Player" JOIN "PlayerStats"
        ON "P_ID" = "PlayerId"
        WHERE "Player"."Position" = :1
        AND (LOWER("FirstName") LIKE '${name}%' OR LOWER("LastName")  LIKE '${name}%')
        AND "Price" >= :2 AND "Price" <= :3
        GROUP BY "P_ID", ("Player"."FirstName" || ' ' || "Player"."LastName"), "Player"."Price", "Position", "Player"."Club", "Player"."Availability", "Photo"
        ORDER BY SUM("${sortingCriteria}") DESC
      `;
    }
    const players = await executeQuery(sql, [position, minPrice, maxPrice]);
    return players;
  }
  catch(error) {
    console.error('Error :', error);
  }

}









module.exports = {
  executeQuery,
  executeQueryWithoutReturn,
  checkLoginInfo,
  getPlayerNames,
  getGwPlayers,
  updateSubs,
  getSortedPlayers,
  updateTeam,
  getTeamPlayers,
  getBalance,
  transferOut, 
  getPlayerPoints,
  getStartingGW,
  updateBalance,
  getStats
};






