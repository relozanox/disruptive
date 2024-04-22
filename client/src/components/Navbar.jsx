import { Link } from "react-router-dom";
import useAuth from "../context/auth/useAuth";
import { Button } from "./ui";
const Navbar = () => {
	const { isAuthenticated, user, logout } = useAuth();

	return (
		<nav className='bg-zinc-700 my-3 flex justify-between py-5 px-10 rounded-lg'>
			<Link to='/'>
				<h1 className='text-2xl font-bold'>Content Manager</h1>
			</Link>
			<ul className='flex gap-x-2'>
				{isAuthenticated ? (
					<>
						<li className="my-2">Welcome {user.username}!</li>
						<li>
							<Link
								to='/add-content-category'
								>
								<Button>Add content category</Button> 
							</Link>
						</li>
						<li>
							<Link
								onClick={() => {
									logout();
								}}
								>
								<Button>Logout</Button>
							</Link>
						</li>
					</>
				) : (
					<>
						<ul className='flex gap-x-2'>
							<li>
								<Link
									to='/login'
									>
									<Button>Login</Button> 
								</Link>
							</li>
							<li>
								<Link
									to='/register'
									className='bg-indigo-500 px-4 py-1 rounded-sm'>
									Register
								</Link>
							</li>
						</ul>
					</>
				)}
			</ul>
		</nav>
	);
};

export default Navbar;
