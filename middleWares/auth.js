const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization) return res.status(401).send('token is required.');
    const authArr = authorization.split(" ");

    if (authArr.length !== 2 || authArr[0] !== 'Bearer') return res.status(401).send('token is required.');

    const token = authArr[1];

    try {
        var decoded = jwt.verify(token, 'randomName');
    } catch (err) {
        return res.status(401).send('Invalid token');
    }
    
    next();
}

