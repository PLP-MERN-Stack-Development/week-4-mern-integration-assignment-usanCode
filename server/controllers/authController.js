const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');


// Signup endpoint logic
exports.signup = async (req, res) => {
    const { email, password } = req.body;

    const exists = await User.findOne({ email });
    if (exists) return res.status(400).json({ message: 'User already exists' });

    const hashed = await bcrypt.hash(password, 10);
    const user = await User.create({ email, password: hashed });

    const token = jwt.sign({ id: user._id , role: user.role }, process.env.JWT_SECRET , {expireIn: '1h'});
    res.json(token);
    
};

// Login endpoint logic

exports.login = async (req, res) => {   
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: 'User Not Found' });
    
    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(401).json({ message: 'Invalid Password' });
    
    const token = jwt.sign({ id: user._id , role: user.role }, process.env.JWT_SECRET , {expireIn : '1h'});
    res.json(token);




}