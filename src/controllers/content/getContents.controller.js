import Content from '../../models/content.model.js';

const getContents = async (req, res) => {
    try {
        const contents = await Content.find({
            user: req.user.id
        }).populate('user');

        res.json(contents);
    } catch (error) {
        return res.status(500).json({
            message: `Something went wrong: ${error.message}`
        });
    }
}

export default getContents;
