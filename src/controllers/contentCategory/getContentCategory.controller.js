import ContentCategory from '../../models/contentCategory.model.js';

const getContentCategory = async (req, res) => {
    try {
        const contentCategory = await ContentCategory.findById(req.params.id);
        if (!contentCategory) {
            return res.status(404).json({
                message: 'Content category not found',
            });
        }
        res.json(contentCategory);
    } catch (error) {
        return res.status(500).json({ message: `Something went wrong: ${error}` })

    }
}

export default getContentCategory;
