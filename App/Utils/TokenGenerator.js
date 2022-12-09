const generateAccessToken = (data) => {
    const jwt = require('jsonwebtoken');
    const dotenv = require('dotenv');
    dotenv.config();
    
    const TOKEN = {
        SECRET: process.env.ACCESS_TOKEN_SECRET,
        REFRESH: process.env.REFRESH_TOKEN_SECRET
    }

    return jwt.sign(data, TOKEN.SECRET, { expiresIn: '900s' });
}

const checkTokenMiddleware = (req, res, next) => {
    const TOKEN = {
        SECRET: process.env.ACCESS_TOKEN_SECRET,
        REFRESH: process.env.REFRESH_TOKEN_SECRET
    }

    // Récupération du token
    const token = req.headers.authorization && extractBearerToken(req.headers.authorization);

    // Présence d'un token
    if (!token) {
        return res.status(401).json({ message: 'Error. Need a token' });
    }

    // Véracité du token
    jwt.verify(token, TOKEN.SECRET, (err, decodedToken) => {
        if (err) {
            res.status(401).json({ message: 'Error. Bad token' });
        } else {
            return next();
        }
    })
}

const extractBearerToken = (headerValue) => {
    if(typeof headerValue !== 'string') {
        return false;
    }

    const matches = headerValue.match(/(bearer)\s+(\S+)/i);
    return matches && matches[2];
}


module.exports = { generateAccessToken, checkTokenMiddleware, extractBearerToken }; 