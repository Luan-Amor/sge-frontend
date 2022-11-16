import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import { EventDetail } from "../views/EventDetail";
import { Home } from "../views/Home";
import { Login } from "../views/Login";
import { SingUp } from "../views/SingUp";
import { UserProfile } from "../views/UserProfile";
import { NewEvent } from "../views/enterprise/NewEvent";
import { Profile } from '../config/profiles'
import { AuthService } from "../services/AuthService";
import { Enroll } from "../views/comum/Enroll";
import { Enrollments } from "../views/comum/Enrollments";
import { ValideUser } from "../views/enterprise/ValideUser";
import { EventDatailEnterprise } from "../views/enterprise/EventDetailEnterprise";

export const ApplicationRoutes = () => {

	function RequireAuth({ children, perfil }) {
		let location = useLocation();

		if (!AuthService.isAuthenticated()) {
			return <Navigate to="/login" state={{ from: location }} replace />;
		}
		if(!AuthService.hasProfile(perfil) && perfil !== 'Free'){
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
			{/* Authentication */}
			<Route path="/users/" exact element={ <RequireAuth  perfil={'Free'} ><UserProfile /></RequireAuth>} />
			{/* Profile User */}
			<Route path="/enroll/:id" exact element={ <RequireAuth perfil={Profile.USER} ><Enroll /></RequireAuth>} />
			<Route path="/usuarios/inscricoes" exact element={ <RequireAuth perfil={Profile.USER} ><Enrollments /></RequireAuth>} />
			<Route path="/eventos/inscricoes/:id" exact element={ <RequireAuth perfil={Profile.ORGANIZER} ><EventDatailEnterprise /></RequireAuth>} />
			{/* Profile Organizer */}
			<Route path="/novo/evento" exact element={ <RequireAuth perfil={Profile.ORGANIZER} ><NewEvent/></RequireAuth>} />
			<Route path="/eventos/:idEvent/:idUser" exact element={ <RequireAuth perfil={Profile.ORGANIZER} ><ValideUser/></RequireAuth>} />
			{/* Profile Admin */}
		</Routes>
	)
}