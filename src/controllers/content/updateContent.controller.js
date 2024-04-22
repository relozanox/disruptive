import Content from '../../models/content.model.js';

const updateContent = async (req, res) => {
    try {
        const { title, type, content, topic } = req.body;

        const contentToUpdate = await Content.findByIdAndUpdate(
            { _id: req.params.id },
            { title, type, content, topic },
            { new: true, }
        );

        if (!contentToUpdate) {
            return res.status(404).json({
                message: 'Content not found',
            });
        }
        res.json(contentToUpdate);

    } catch (error) {
        return res.status(500).json({
            message: `Something went wrong: ${error}` 
        });
    }

}

export default updateContent;
