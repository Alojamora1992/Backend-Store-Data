const {Client} = require('pg');

const getConnection = async () => {

  const client =  new Client({
    host: 'localhost',
    port: 5432,
    user: "carlos",
    password: "carlos2413",
    database: "Store"
  });
  await client.connect();
  return client;
}

module.exports = getConnection;
