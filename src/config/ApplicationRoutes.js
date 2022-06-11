import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import { EventDetail } from "../views/EventDetail";
import { Home } from "../views/Home";
import { Login } from "../views/Login";
import { SingUp } from "../views/SingUp";
import { UserProfile } from "../views/UserProfile";
import { useToken } from "../hooks/useToken"
import { useCookies } from "react-cookie";

export const ApplicationRoutes = () => {

	const { token, setToken } = useToken();
	const [cookies] = useCookies(['perfil']);
	const PROFILE_COMUM = 'Comum';
	const PROFILE_ENTERPRISE = 'Enterprise';
	const PROFILE_ADMIN = 'Admin';

	function RequireAuth({ children, perfil }) {
		let location = useLocation();

		if (!token) {
			return <Navigate to="/login" state={{ from: location }} replace />;
		}
		if(!cookies.perfil.some(p => p === perfil)){
			return <Navigate to="/" state={{ from: location }} replace />;
		}
		return children;
	}

	return (
		<Routes>
			<Route path="/" exact element={<Home />} />
			<Route path="/events/:id" exact element={<EventDetail />} />
			<Route path="/singup" exact element={<SingUp />} />
			<Route path="/login" exact element={<Login setToken={setToken} />} />
			<Route path="/users/" exact element={ <RequireAuth perfil={PROFILE_COMUM} ><UserProfile /></RequireAuth>} />
		</Routes>
	)
}