const loginSchema = require('./userSchema/login')
const signupSchema = require('./userSchema/signup')

const validator = {
    login: (data) => loginSchema.validate(data),
    signup: (data) => signupSchema.validate(data)
}

module.exports = validator;