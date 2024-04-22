import User from '../../models/user.model.js';
import bcrypt from 'bcryptjs';
import createAccessToken from '../../libs/jwt.js';

const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ message: ['User not found'] });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ message: ['Invalid credentials'] });
        }

        const token = await createAccessToken({ id: user._id })

        res.cookie('token', token);

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
export default login;