const Joi = require("joi");

module.exports = Joi.object({
	email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } }),
	password: Joi.string().required(),
});
