import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import { EventDetail } from "../views/EventDetail";
import { Home } from "../views/Home";
import { Login } from "../views/Login";
import { SingUp } from "../views/SingUp";
import { UserProfile } from "../views/UserProfile";
import { useCookies } from "react-cookie";
import { NewEvent } from "../views/NewEvent";
import { UserEvents } from "../views/UserEvents";

export const ApplicationRoutes = () => {

	const [cookies] = useCookies(['token', 'perfil']);
	const PROFILE_COMUM = 'Comum';
	const PROFILE_ENTERPRISE = 'Enterprise';
	const PROFILE_ADMIN = 'Admin';

	function RequireAuth({ children, perfil }) {
		let location = useLocation();

		if (!cookies.token) {
			return <Navigate to="/login" state={{ from: location }} replace />;
		}
		if(!cookies.perfil.some(p => p === perfil)){
			return <Navigate to="/" state={{ from: location }} replace />;
		}
		return children;
	}

	return (
		<Routes>
			{/* Publico */}
			<Route path="/" exact element={<Home />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/singup" exact element={<SingUp />} />
			<Route path="/events/:id" exact element={<EventDetail />} />
			{/* Comum */}
			<Route path="/users/" exact element={ <RequireAuth perfil={PROFILE_COMUM} ><UserProfile /></RequireAuth>} />
			{/* Enterprise */}
			<Route path="/novo/evento" exact element={ <NewEvent/>} />
			<Route path="/eventos/criados" exact element={ <RequireAuth perfil={PROFILE_ENTERPRISE} ><UserEvents/></RequireAuth>} />
			{/* Admin */}
		</Routes>
	)
}