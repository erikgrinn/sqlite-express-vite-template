const db = require("../db/queries");
const path = require("node:path");

function getUsernames(req, res) {
  const usernames = db.getUsernames();
  console.log("Usernames: ", usernames);
  res.send("Usernames: " + usernames.map((user) => user.username).join(", "));
}

// function createUsernameGet(req, res) {
//   res.sendFile(path.join(__dirname, "../form.html"));
// }

// function createUsernamePost(req, res) {
//   const { username } = req.body;
//   db.insertUsername(username);
//   res.redirect("/");
// }

module.exports = {
  getUsernames,
//   createUsernameGet,
//   createUsernamePost,
};