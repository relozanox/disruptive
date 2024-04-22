import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import useContentCategory from "../context/contentCategory/useContentCategory";
import { Button, Card, Input, Label} from "../components/ui";

const ContentCategoryFormPage = () => {
	const { createContentCategory, getContentCategory, updateContentCategory } = useContentCategory();
	const navigate = useNavigate();
	const params = useParams();
	const {
		register,
		handleSubmit,
		setValue,
		formState: { errors },
	} = useForm();

	const onSubmit = async (data) => {
		try {
			if (params.id) {
				updateContentCategory(params.id, data);
			} else {
				createContentCategory(data);
			}
			navigate("/content-categories");
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		const loadContentCategory = async () => {
			if (params.id) {
				const contentCategory = await getContentCategory(params.id);
				setValue("name", contentCategory.name);
			}
		};
		loadContentCategory();
	}, [getContentCategory, params.id, setValue]);

	return (
		<Card>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Label htmlFor='name'>Content category name</Label>
				<Input
					type='text'
					name='name'
					placeholder='Content Category'
					{...register("name")}
					autoFocus
				/>
				{errors.title && (
					<p className='text-red-500 text-xs italic'>Please enter a name.</p>
				)}
				<Button>Save </Button>
			</form>
		</Card>
	);
};

export default ContentCategoryFormPage;
