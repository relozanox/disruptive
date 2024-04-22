import { Router } from "express";
import authRequired from '../middlewares/authRequired.middleware.js'
import getContentCategories from '../controllers/contentCategory/getContentCategories.controller.js';
import getContentCategory from '../controllers/contentCategory/getContentCategory.controller.js';
import createContentCategory from '../controllers/contentCategory/createContentCategory.controller.js';
import deleteContentCategory from '../controllers/contentCategory/deleteContentCategory.controller.js';
import updateContentCategory from '../controllers/contentCategory/updateContentCategory.controller.js';
import validator from "../middlewares/validator.middleware.js";
import createContentCategorySchema from "../schemas/contentCategory.schema.js";

const router = Router();

router.get('/content-categories', authRequired, getContentCategories);

router.get('/content-category/:id', authRequired, getContentCategory);

router.post('/content-category', authRequired, validator(createContentCategorySchema), createContentCategory);

router.delete('/content-category/:id', authRequired, deleteContentCategory);

router.put('/content-category/:id', authRequired, updateContentCategory);

export default router;
