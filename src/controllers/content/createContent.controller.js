import Content from '../../models/content.model.js';

const createContent = async (req, res) => {
    try {
        const { title, type, content, topic } = req.body;
        const newContent = new Content({
            title,
            type,
            content,
            topic,
            user: req.user.id
        });

        const savedContent = await newContent.save();

        res.json(savedContent);

    } catch (error) {
        return res.status(500).json({ 
            message: `Something went wrong: ${error}` 
        });
    }
}

export default createContent;
