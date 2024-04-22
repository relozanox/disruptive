import { z } from 'zod';

const createContentSchema = z.object({
    title: z.string({
        required_error: 'Title is required',
    }),
    type: z.string({
        required_error: 'Type is required',
    }),
    Content: z.string({
        required_error: 'Content is required',
    }),
    Topic: z.string({
        required_error: 'Topic is required',
    }),
});

export default createContentSchema;
