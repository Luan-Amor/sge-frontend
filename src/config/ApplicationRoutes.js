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
import { Enrollments } from "../views/Enrollments";
import { ValideUser } from "../views/ValideUser";

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
			{/* Comum */}
			<Route path="/users/" exact element={ <RequireAuth  perfil={'Free'} ><UserProfile /></RequireAuth>} />
			<Route path="/enroll/:id" exact element={ <RequireAuth perfil={Profile.COMUM} ><Enroll /></RequireAuth>} />
			<Route path="/usuarios/inscricoes" exact element={ <RequireAuth perfil={Profile.COMUM} ><Enrollments /></RequireAuth>} />
			{/* Enterprise */}
			<Route path="/novo/evento" exact element={ <RequireAuth perfil={Profile.ENTERPRISE} ><NewEvent/></RequireAuth>} />
			<Route path="/eventos/criados" exact element={ <RequireAuth perfil={Profile.ENTERPRISE} ><UserEvents/></RequireAuth>} />
			<Route path="/eventos/:idEvent/:idUser" exact element={ <RequireAuth perfil={Profile.ENTERPRISE} ><ValideUser/></RequireAuth>} />
			{/* Admin */}
		</Routes>
	)
}