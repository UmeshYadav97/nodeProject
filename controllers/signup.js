const bcrypt = require('bcrypt');

const validator = require("../validators");
const User = require('./../models/user')

module.exports = async (req, res) => {
    const { email, password } = req.body;
    const { error } = validator.signup({ email, password });
    if (error && error.details) return res.status(400).send({ message: error.details[0].message, code: 400});

    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).send({ message: "User already registered.", code: 400 });

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    const user = new User({ email, password: hashPassword });
    await user.save();
    res.status(200).send({ message: 'signup succefully', code: 200 });
}