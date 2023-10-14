import {
	Route,
	Routes,
	Navigate,
	useNavigate,
	useLocation
} from 'react-router';
import { PublicRoute } from '../components/routes/PublicRoute';
import { Layout } from '../components/Layout/Layout';
import WelcomePage from '../pages/WelcomePage/WelcomePage';
import SearchPage from '../pages/SearchPage/SearchPage';
import '../index.css';
import { useEffect } from 'react';

export const App = () => {
	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		if (location.pathname !== '/home') {
			navigate('/home');
		}
	}, [navigate, location]);

	return (
		<>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route
						path="search"
						element={
							<PublicRoute>
								<SearchPage />
							</PublicRoute>
						}
					/>
					<Route
						path="home"
						index
						element={
							<PublicRoute>
								<WelcomePage />
							</PublicRoute>
						}
					/>
				</Route>
				<Route path="*" element={<Navigate to="/home" />} />
			</Routes>
		</>
	);
};
