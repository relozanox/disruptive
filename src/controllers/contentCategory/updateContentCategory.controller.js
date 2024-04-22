import ContentCategory from '../../models/contentCategory.model.js';

const updateContentCategory = async (req, res) => {
    try {
        const { name } = req.body;

        const contentCategory = await ContentCategory.findByIdAndUpdate(
            { _id: req.params.id },
            { name },
            { new: true, }
        );

        if (!contentCategory) {
            return res.status(404).json({
                message: 'Content category not found',
            });
        }
        res.json(contentCategory);

    } catch (error) {
        return res.status(500).json({
            message: `Something went wrong: ${error}` 
        });
    }

}

export default updateContentCategory;
