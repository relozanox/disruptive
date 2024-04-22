import { z } from 'zod';

const createContentCategorySchema = z.object({
    name: z.string({
        required_error: 'Name is required',
    }),
});

export default createContentCategorySchema;
