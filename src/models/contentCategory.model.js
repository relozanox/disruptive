import mongoose from 'mongoose';

const contentCategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    }
}, {
    timestamps: true
});

export default mongoose.model('ContentCategory', contentCategorySchema);
