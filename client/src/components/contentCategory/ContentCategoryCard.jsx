import { Link } from "react-router-dom";
import useContentCategory from "../../context/contentCategory/useContentCategory";

const ContentCategoryCard = ({ contentCategory }) => {
	const { deleteContentCategory } = useContentCategory();

	return (
		<div className='bg-zinc-800 masx-w-md w-full p-10 rounded-md'>
			<header className='flex justify-between'>
				<h1 className='text-2xl font-bold'>{contentCategory.name}</h1>
				<div className='flex gap-x-2 items-center'>
					<button
						onClick={() => {
							deleteContentCategory(contentCategory._id);
						}}>
						Delete
					</button>
					<Link to={`/content-category/${contentCategory._id}`}>Edit</Link>
				</div>
			</header>
		</div>
	);
};

export default ContentCategoryCard;
