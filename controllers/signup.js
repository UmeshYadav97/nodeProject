const bcrypt = require("bcrypt");

const validator = require("../validators");
const User = require("./../models/user");

module.exports = async (req, res) => {
	const { email, password } = req.body;
	const { error } = validator.signup({ email, password });
	if (error && error.details) return res.status(400).json({ message: error.details[0].message, code: 400 });

	const existingUser = await User.findOne({ email });
	if (existingUser) return res.status(400).json({ message: "User already registered.", code: 400 });

	const salt = await bcrypt.genSalt(10);
	const hashedPassword = await bcrypt.hash(password, salt);

	const user = new User({ email, password: hashedPassword });
	await user.save();
	res.status(200).json({ message: "signup successfully", code: 200 });
};
