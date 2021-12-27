const mongoose = require("mongoose");

module.exports = () => {
	const { DB_USER, DB_PASSWORD } = process.env;
	mongoose.connect(
		`mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.j86ef.mongodb.net/learning?retryWrites=true&w=majority`,
		{
			useNewUrlParser: true,
			useUnifiedTopology: true,
		},
	);
};
