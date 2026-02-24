const Database = require('better-sqlite3');
const db = new Database('db/top_users.db');

function getUsernames() {
  const stmt = db.prepare("SELECT * FROM usernames");
  return stmt.all();
}

// function insertUsername(username) {
//   const stmt = db.prepare("INSERT INTO usernames (username) VALUES (?)");
//   stmt.run(username);
// }

module.exports = {
  getUsernames,
  // insertUsername
};