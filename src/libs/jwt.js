import jwt from "jsonwebtoken";
import { TOKEN_KEY } from "../config.js";

const createAccessToken = async (payload) => {
    // try {
    //     const token = jwt.sign(
    //         payload,
    //         TOKEN_KEY,
    //         {
    //             expiresIn: '1d',
    //         });
    //     return token;
    // } catch (error) {
    //     throw new Error(err);
    // }
    return new Promise((resolve, reject) => {
        jwt.sign(
            payload,
            TOKEN_KEY,
            {
                expiresIn: '1d',
            },
            (err, token) => {
                if (err) {
                    reject(err);
                }
                resolve(token);
            }
        )
    })
}

export default createAccessToken;
