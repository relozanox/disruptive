import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import AuthProvider from "./context/auth/AuthProvider";
import ContentCategoryPage from "./pages/ContentCategoryPage";
import ContentCategoryFormPage from "./pages/ContentCategoryFormPage";
import HomePage from "./pages/HomePage";
import ProtectedRoute from "./ProtectedRoute";
import ContentCategoryProvider from "./context/contentCategory/ContentCategoryProvider";
import Navbar from "./components/Navbar";

const App = () => {
	return (
		<AuthProvider>
			<ContentCategoryProvider>
				<BrowserRouter>
					<main className="container content-container mx-auto px-10 md:px-0">
					<Navbar />
					<Routes>
						<Route path='/' element={<HomePage />} />
						<Route path='/login' element={<LoginPage />} />
						<Route path='/register' element={<RegisterPage />} />

						<Route element={<ProtectedRoute />}>
							<Route path='/content-categories' element={<ContentCategoryPage />} />
							<Route path='/add-content-category' element={<ContentCategoryFormPage />} />
							<Route path='/content-category/:id' element={<ContentCategoryFormPage />} />
						</Route>
					</Routes>
					</main>
				</BrowserRouter>
			</ContentCategoryProvider>
		</AuthProvider>
	);
};

export default App;
