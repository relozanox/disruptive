import axios from './axios';

export const getContentCategoriesRequest = async () => axios.get('/content-categories');

export const getContentCategoryRequest = async (id) => axios.get(`/content-category/${id}`);

export const createContentCategoryRequest = async (contentCategory) => axios.post(`/content-category`, contentCategory);

export const updateContentCategoryRequest = async (id, contentCategory) => axios.put(`/content-category/${id}`, contentCategory);

export const deleteContentCategoryRequest = async (id) => axios.delete(`/content-category/${id}`);
