import Content from '../../models/content.model.js';

const deleteContent = async (req, res) => {
    try {
        const content = await Content.findByIdAndDelete(req.params.id);
        if (!content) {
            return res.status(404).json({
                message: 'Content not found',
            });
        }
        return res.sendStatus(204);

    } catch (error) {
        return res.status(500).json({ 
            message: `Something went wrong: ${error}` 
        });

    }
}

export default deleteContent;
