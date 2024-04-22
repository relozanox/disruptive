import contentCategorySchema from '../../models/contentCategory.model.js';

const createContentCategory = async (req, res) => {
    console.log('hola',req)
    try {
        const { name } = req.body;
        const newContentCategory = new contentCategorySchema({
            name,
            user: req.user.id,
        });

        const savedContentCategorySchema = await newContentCategory.save();

        res.json(savedContentCategorySchema);

    } catch (error) {
        return res.status(500).json({ 
            message: `Something went wrong: ${error}` 
        });
    }
}

export default createContentCategory;
