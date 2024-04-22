import { useEffect } from "react";
import useContentCategory from "../context/contentCategory/useContentCategory";
import ContentCategoryCard from "../components/contentCategory/ContentCategoryCard";
import { ImFileEmpty } from "react-icons/im";

const ContentCategoryPage = () => {
	const { getContentCategories, contentCategory } = useContentCategory();

	useEffect(() => {
		getContentCategories();
	},[getContentCategories]);

	return (
		<>
			{contentCategory.length === 0 && (
				<div className='flex justify-center items-center p-10'>
					<div>
						<ImFileEmpty className='text-6xl text-gray-400 m-auto my-2' />
						<h1 className='font-bold text-xl'>
							No content yet, please add a new one
						</h1>
					</div>
				</div>
			)}

			<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-2'>
				{contentCategory.map((category, i) => (
					<ContentCategoryCard contentCategory={category} key={i} />
				))}
			</div>
		</>
	);
};

export default ContentCategoryPage;
