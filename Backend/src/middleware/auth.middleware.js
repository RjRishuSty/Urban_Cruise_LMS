const jwt = require('jsonwebtoken');
const userModel = require('../models/auth.model');

const authMiddleware = async(req,res,next)=>{
    try {
        const token = req.cookies.token;
        if (!token) return res.status(401).json({ message: "Not authenticated" });
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        req.user = await userModel.findById(decoded.id).select('-password');
        next();
    } catch (error) {
         res.status(401).json({ message: "Invalid Token" });
    }
}

module.exports = {authMiddleware};