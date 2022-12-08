const generateAccessToken = (data) => {
    const jwt = require('jsonwebtoken');
    require('dotenv').config();
    
    const TOKEN = {
        SECRET: process.env.ACCESS_TOKEN_SECRET,
        REFRESH: process.env.REFRESH_TOKEN_SECRET
    }

    return jwt.sign(data, TOKEN.SECRET, { expiresIn: '900s' });
}


module.exports = { generateAccessToken }; 