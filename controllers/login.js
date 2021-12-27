const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const validator = require("../validators");
const User = require("./../models/user");

module.exports = async (req, res) => {
	const { email, password } = req.body;
	const { error } = validator.login({ email, password });
	if (error && error.details) return res.status(400).json({ message: error.details[0].message, code: 400 });

	const existingUser = await User.findOne({ email });
	if (!existingUser) return res.status(404).json({ message: "Invalid email or password.", code: 404 });

	const isMatched = await bcrypt.compare(password, existingUser.password);
	if (!isMatched) return res.status(404).json({ message: "Invalid email or password.", code: 404 });

	const privateKey = process.env.BCRYPT_PRIVATE_KEY;
	const token = jwt.sign({ email }, privateKey);

	res.status(200).json({ token, message: "login successfully", code: 200 });
};
