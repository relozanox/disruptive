import { useForm } from "react-hook-form";
import useAuth from "../context/auth/useAuth";
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Card, Message, Button, Input, Label } from "../components/ui";
import { zodResolver } from "@hookform/resolvers/zod";
import registerSchema from "../schemas/auth/register.schema";

const RegisterPage = () => {
	const { signup, isAuthenticated, errors: registerErrors } = useAuth();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(registerSchema),
	});
	const navigate = useNavigate();

	const onSubmit = async (values) => {
		await signup(values);
	};

	useEffect(() => {
		if (isAuthenticated) {
			navigate("/content-categories");
		}
	}, [isAuthenticated, navigate]);

	return (
		<div className='flex h-[calc(100vh-100px)] items-center justify-center'>
			<Card>
				{registerErrors.map((error, i) => (
					<Message message={error} key={i} />
				))}
				<h1 className='text-3xl font-bold'>Register</h1>
				<form onSubmit={handleSubmit(onSubmit)}>
					<Label htmlFor='username'>Username:</Label>
					<Input
						type='text'
						name='username'
						placeholder='Write your name'
						{...register("username")}
						autoFocus
					/>
					{errors.username?.message && (
						<p className='text-red-500'>{errors.username?.message}</p>
					)}

					<Label htmlFor='email'>Email:</Label>
					<Input
						name='email'
						placeholder='youremail@domain.tld'
						{...register("email")}
					/>
					{errors.email?.message && (
						<p className='text-red-500'>{errors.email?.message}</p>
					)}

					<Label htmlFor='password'>Password:</Label>
					<Input
						type='password'
						name='password'
						placeholder='********'
						{...register("password")}
					/>
					{errors.password?.message && (
						<p className='text-red-500'>{errors.password?.message}</p>
					)}
					<Button>Submit</Button>
				</form>
				<p className='flex gap-x-2 justify-between'>
					Already Have an Account?
					<Link className='text-sky-500' to='/login'>
						Login
					</Link>
				</p>
			</Card>
		</div>
	);
};

export default RegisterPage;
