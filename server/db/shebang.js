#! /usr/bin/env node

// sqlite3 is sync, not async (specifically better-sqlite3)
// in contrast to async with postgres server
// this applies to all sqlite related operations in this template


// node will ignore shebang line if manually running
// (so not in terminal)
// remember it needs to be very first line

const Database = require('better-sqlite3');
const db = new Database('db/top_users.db');

// Drop table if exists (SQLite syntax)
const SQLDrop = `
DROP TABLE IF EXISTS usernames;
`;

// Create table and insert values (SQLite syntax)
const SQL = `
CREATE TABLE IF NOT EXISTS usernames (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT
);

INSERT INTO usernames (username) 
VALUES
  ('Bryan'),
  ('Odin'),
  ('Damon');
`;

function seed() {
  console.log("seeding...");
  db.exec(SQLDrop);
  db.exec(SQL);
  db.close();
  console.log("done");
}

seed();