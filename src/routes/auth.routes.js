import { Router } from "express";
import login from "../controllers/auth/login.controller.js";
import register from "../controllers/auth/register.controller.js";
import logout from "../controllers/auth/logout.controller.js";
import validator from "../middlewares/validator.middleware.js";
import loginSchema from "../schemas/auth/login.schema.js";
import registerSchema from "../schemas/auth/register.schema.js";
import verifyToken from "../controllers/auth/verifyToken.controller.js";

const router = Router();

router.post('/register',validator(registerSchema), register);

router.post('/login',validator(loginSchema), login);

router.post('/logout', logout);

router.post('/verify',verifyToken);

export default router;
