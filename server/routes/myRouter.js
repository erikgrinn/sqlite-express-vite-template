const path = require("node:path");
const { Router } = require("express");
const { simpleGet } = require("../controllers/myController");

const myRouter = Router();

myRouter.get("/", simpleGet)

module.exports = myRouter;
