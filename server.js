const express = require("express");
const cors = require("cors");
const routes = require("./routes");
require("dotenv").config();
require("./DBconnect")();

const app = express();

app
	.use(express.urlencoded({ extended: false }))
	.use(express.json())
	.use(cors())
	.disable("x-powered-by")
	.use(routes);

app.listen(8080, () => console.log("listening on 8080..."));
