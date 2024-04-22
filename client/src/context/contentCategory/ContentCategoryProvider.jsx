import { useState } from "react";
import ContentCategoryContext from "./ContentCategoryContext";
import {
	createContentCategoryRequest,
	getContentCategoryRequest,
	deleteContentCategoryRequest,
	getContentCategoriesRequest,
	updateContentCategoryRequest,
} from "../../api/contentCategory";

// eslint-disable-next-line react/prop-types
const ContentCategoryProvider = ({ children }) => {
	const [contentCategory, setContentCategory] = useState([]);

	const getContentCategories = async () => {
		try {
			const res = await getContentCategoriesRequest();
			setContentCategory(res.data);
		} catch (error) {
			console.log(error);
		}
	};

	const createContentCategory = async (contentCategory) => {
		try {
			await createContentCategoryRequest(contentCategory);
		} catch (error) {
			console.log(error);
		}
	};

	const updateContentCategory = async (id, contentCategory) => {
		try {
			await updateContentCategoryRequest(id, contentCategory);
		} catch (error) {
			console.log(error);
		}
	};

	const deleteContentCategory = async (id) => {
		try {
			const res = await deleteContentCategoryRequest(id);
			if (res.status === 204) {
				setContentCategory(contentCategory.filter((contentCategory) => contentCategory._id !== id));
			}
		} catch (error) {
			console.log(error);
		}
	};

	const getContentCategory = async (id) => {
		try {
			const res = await getContentCategoryRequest(id);
			return res.data;
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<ContentCategoryContext.Provider
			value={{ contentCategory, createContentCategory, getContentCategories, deleteContentCategory, getContentCategory, updateContentCategory }}>
			{children}
		</ContentCategoryContext.Provider>
	);
};

export default ContentCategoryProvider;
