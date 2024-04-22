import ContentCategory from '../../models/contentCategory.model.js';

const deleteContentCategory = async (req, res) => {
    try {
        const contentCategory = await ContentCategory.findByIdAndDelete(req.params.id);
        if (!contentCategory) {
            return res.status(404).json({
                message: 'Content category not found',
            });
        }
        return res.sendStatus(204);

    } catch (error) {
        return res.status(500).json({ 
            message: `Something went wrong: ${error}` 
        });

    }
}

export default deleteContentCategory;
