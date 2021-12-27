const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
	const { authorization } = req.headers;
	if (!authorization) return res.status(401).json({ message: "Authentication is required.", code: 401 });
	const authArr = authorization.split(" ");

	if (authArr.length !== 2 || authArr[0] !== "Bearer")
		return res.status(401).json({ message: "Authentication is required.", code: 401 });

	const token = authArr[1];

	try {
		const privateKey = process.env.BCRYPT_PRIVATE_KEY;
		var decoded = jwt.verify(token, privateKey);
	} catch (err) {
		return res.status(401).json({ message: "Invalid token.", code: 401 });
	}

	next();
};
