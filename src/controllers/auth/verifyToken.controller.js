import jwt from "jsonwebtoken";
import { TOKEN_KEY } from "../../config.js";
import User from "../../models/user.model.js";

const verifyToken = async (req, res) => {
    const {token} = req.cookies;

    if(!token){
        return res.send(false);
    }

    jwt.verify(token, TOKEN_KEY, async (error, user) =>{
        if (error) {
            return res.sendStatus(401);
        }
        const userFound = await User.findById(user.id);

        if (!userFound) {
            return res.sendStatus(401);
        }

        return res.json({
            id: userFound._id,
            username: userFound.username,
            email: userFound.email
        });
    })

}

export default verifyToken;
