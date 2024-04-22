import User from '../../models/user.model.js';
import bcrypt from 'bcryptjs';
import createAccessToken from '../../libs/jwt.js';

const register = async (req, res) => {
    try {
        const { email, password, username } = req.body;

        const userFound = await User.findOne({ email });

        if (userFound) {
            return res.status(400).json({
                message: ['The email already exists']
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            username,
            email,
            password: hashedPassword,
        });

        const user = await newUser.save();
        const token = await createAccessToken({
            id: user._id
        });

        res.cookie("token", token, {
            httpOnly: process.env.NODE_ENV !== 'development',
            secure: true,
            sameSite: 'none',
        });

        res.json({
            id: user._id,
            username: user.username,
            email: user.email
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

export default register;