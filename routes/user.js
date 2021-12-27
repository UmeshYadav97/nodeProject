const route = require("express").Router();
const controllers = require("./../controllers");

route.post("/login", controllers.login).post("/signup", controllers.signup).put("/change-password");

module.exports = route;
