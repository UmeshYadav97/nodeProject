const route = require("express").Router();
const controllers = require("./../controllers");

route.get("/home", controllers.home);

module.exports = route;
