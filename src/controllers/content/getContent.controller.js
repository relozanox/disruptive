import Content from '../../models/content.model.js';

const getContent = async (req, res) => {
    try {
        const content = await Content.findById(req.params.id);
        if (!content) {
            return res.status(404).json({
                message: 'Content not found',
            });
        }
        res.json(content);
    } catch (error) {
        return res.status(500).json({ message: `Something went wrong: ${error}` })

    }
}

export default getContent;
