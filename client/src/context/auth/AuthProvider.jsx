import { useState, useEffect } from "react";
import { registerRequest, loginRequest, verifyTokenRequest } from "../../api/auth";
import AuthContext from "./AuthContext";
import Cookies from "js-cookie";

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [errors, setErrors] = useState([]);
	const [loading, setLoading] = useState(true);

	// Delete error messages after 5 seconds
	useEffect(() => {
		if (errors.length > 0) {
			const timer = setTimeout(() => {
				setErrors([]);
			}, 5000);
			return () => clearTimeout(timer);
		}
	}, [errors]);

	const signup = async (user) => {
		try {
			const res = await registerRequest(user);
			if (res.status === 200) {
				setUser(res.data);
				setIsAuthenticated(true);
			}
		} catch (error) {
			console.log(error.response.data);
			setErrors([error.response.data.message]);
		}
	};

	const signin = async (user) => {
		try {
			const res = await loginRequest(user);
			setUser(res.data);
			setIsAuthenticated(true);
		} catch (error) {
			setErrors(error.response.data.message);
		}
	};

	const logout = ()=>{
		Cookies.remove('token');
		setUser(null);
		setIsAuthenticated(false);
	}

	useEffect(() => {
		const checkLogin = async () => {
			const cookies = Cookies.get();

			if (!cookies.token) {
				setIsAuthenticated(false);
				setLoading(false);
				return;
			}

			try {
				const res = await verifyTokenRequest(cookies.token);

				if (!res.data) {
					return setIsAuthenticated(false);
				}

				setIsAuthenticated(true);
				setUser(res.data);
				setLoading(false);
			} catch (error) {
				setIsAuthenticated(false);
				setLoading(false);
			}
		};

		checkLogin();
	}, [isAuthenticated]);

	return (
		<AuthContext.Provider
			value={{
				signup,
				signin,
				loading,
				logout,
				user,
				isAuthenticated,
				errors,
			}}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
