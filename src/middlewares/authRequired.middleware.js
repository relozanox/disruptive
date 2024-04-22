import jwt from "jsonwebtoken";
import { TOKEN_KEY } from "../config.js";

const authRequired = (req, res, next) => {
    try {
        const { token } = req.cookies;

        if (!token) {
            return res.status(401).json({
                message: 'There is no valid token, authorization denied'
            });
        }

        jwt.verify(token, TOKEN_KEY, (error, user) => {
            if (error) {
                return res.status(401).json({
                    message: 'Invalid token'
                });
            }
            req.user = user;

            next();
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
}

export default authRequired;
