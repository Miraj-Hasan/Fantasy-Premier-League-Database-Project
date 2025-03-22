let oracledb = require('oracledb');
oracledb.autoCommit = true;
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;
oracledb.fetchAsString = [oracledb.CLOB];
const dbConfig = require('../dbConfig');

async function initialize() {
  try{
    await oracledb.createPool({
      ...dbConfig,
      poolAlias: 'default'
    }
      );
      console.log('Pool created successfully');
  } catch{
    console.log('error creating pool');
  }
  
}

async function close() {
  await oracledb.getPool().close();
}

module.exports = {
  initialize,
  close,
  oracledb
};