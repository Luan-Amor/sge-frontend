import instance from './ApiService';
import { CookieService } from './CookieService';
import jwt_decode from "jwt-decode";
export class AuthService {


	static login(credentials) {
		return instance.post('login', credentials)
	}

	static isAuthenticated(){
		const token = CookieService.get('token'); 
		return token !== undefined;
	}

	static hasProfile(perfilUser){
		const token = CookieService.get('token'); 
		const {perfil} = jwt_decode(token);
        return perfil === perfilUser;
	}

	static getTokenDecode(){
		const token = CookieService.get('token'); 
		return token ? jwt_decode(token) : "";
	}

	static decodeToken(token){
		return token ? jwt_decode(token) : "";
	}

	static isAuth(perfil){
		return this.isAuthenticated() && this.hasProfile(perfil);
	}
}