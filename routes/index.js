const routes = require("express").Router();
const middleWares = require("../middleWares");
const userRoute = require("./user");
const homeRoute = require("./home");

routes.use("/user", userRoute).use(middleWares.auth).use(homeRoute);

module.exports = routes;
