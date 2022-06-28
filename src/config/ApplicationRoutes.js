import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import { EventDetail } from "../views/EventDetail";
import { Home } from "../views/Home";
import { Login } from "../views/Login";
import { SingUp } from "../views/SingUp";
import { UserProfile } from "../views/UserProfile";
import { NewEvent } from "../views/NewEvent";
import { UserEvents } from "../views/UserEvents";
import { Profile } from '../config/profiles'
import { AuthService } from "../services/AuthService";
import { Enroll } from "../views/Enroll";

export const ApplicationRoutes = ({ setCookies }) => {

	function RequireAuth({ children, perfil }) {
		let location = useLocation();

		if (!AuthService.isAuthenticated()) {
			return <Navigate to="/login" state={{ from: location }} replace />;
		}
		if(!AuthService.hasProfile(perfil)){
			return <Navigate to="/" state={{ from: location }} replace />;
		}
		return children;
	}

	return (
		<Routes>
			{/* Publico */}
			<Route path="/" exact element={<Home />} />
			<Route path="/login" exact element={<Login setCookies={setCookies} />} />
			<Route path="/singup" exact element={<SingUp />} />
			<Route path="/events/:id" exact element={<EventDetail />} />
			{/* Comum */}
			<Route path="/users/" exact element={ <RequireAuth perfil={Profile.COMUM} ><UserProfile /></RequireAuth>} />
			<Route path="/enroll/" exact element={ <RequireAuth perfil={Profile.COMUM} ><Enroll /></RequireAuth>} />
			{/* Enterprise */}
			<Route path="/novo/evento" exact element={ <RequireAuth perfil={Profile.ENTERPRISE} ><NewEvent/></RequireAuth>} />
			<Route path="/eventos/criados" exact element={ <RequireAuth perfil={Profile.ENTERPRISE} ><UserEvents/></RequireAuth>} />
			{/* Admin */}
		</Routes>
	)
}