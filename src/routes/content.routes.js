import { Router } from "express";
import authRequired from '../middlewares/authRequired.middleware.js'
import getContents from '../controllers/content/getContents.controller.js';
import getContent from '../controllers/content/getContent.controller.js';
import createContent from '../controllers/content/createContent.controller.js';
import deleteContent from '../controllers/content/deleteContent.controller.js';
import updateContent from '../controllers/content/updateContent.controller.js';
import validator from "../middlewares/validator.middleware.js";
import createContentSchema from "../schemas/content.schema.js";

const router = Router();

router.get('/contents', authRequired, getContents);

router.get('/content/:id', authRequired, getContent);

router.post('/content', authRequired, validator(createContentSchema), createContent);

router.delete('/content/:id', authRequired, deleteContent);

router.put('/content/:id', authRequired, updateContent);

export default router;
