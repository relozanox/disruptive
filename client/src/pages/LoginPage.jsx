import { useForm } from "react-hook-form";
import useAuth from "../context/auth/useAuth";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import loginSchema from "../schemas/auth/login.schema";
import { Card, Message, Button, Input, Label } from "../components/ui";

const LoginPage = () => {
	const { signin, errors: loginErrors, isAuthenticated } = useAuth();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(loginSchema),
	});

	const navigate = useNavigate();

	const onSubmit = (data) => {
		signin(data);
	};

	useEffect(() => {
		if (isAuthenticated) {
			navigate("/content-categories");
		}
	}, [isAuthenticated, navigate]);

	return (
		<div className='flex h-[calc(100vh-100px)] items-center justify-center'>
			<Card>
				{loginErrors.map((error, i) => (
					<Message message={error} key={i} />
				))}
				<h1 className='text-2xl font-bold'>Login</h1>

				<form onSubmit={handleSubmit(onSubmit)}>
					<Label htmlFor='email'>Email:</Label>
					<Input
						label='Write your email'
						type='email'
						name='email'
						placeholder='youremail@domain.com'
						{...register("email", { required: true })}
					/>
					<p>{errors.email?.message}</p>

					<Label htmlFor='password'>Password:</Label>
					<Input
						type='password'
						name='password'
						placeholder='Write your password'
						{...register("password", { required: true, minLength: 6 })}
					/>
					<p>{errors.password?.message}</p>

					<Button>Login</Button>
				</form>
				<p className='flex gap-x-2 justify-between'>
					Don&#39;t have an account?
					<Link to='/register' className='text-sky-500'>
						Sign up
					</Link>
				</p>
			</Card>
		</div>
	);
};

export default LoginPage;
