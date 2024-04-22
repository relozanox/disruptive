import ContentCategory from '../../models/contentCategory.model.js';

const getContentCategories = async (req, res) => {
    try {
        const contentCategory = await ContentCategory.find();

        if(!contentCategory){
            return res.status(404).json({message: 'Content category not found'});
        }

        return res.json(contentCategory);
    } catch (error) {
        return res.status(500).json({
            message: `Something went wrong: ${error.message}`
        });
    }
}

export default getContentCategories;
