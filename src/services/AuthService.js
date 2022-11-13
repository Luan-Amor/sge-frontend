import instance from './ApiService';
import { CookieService } from './CookieService';
import jwt_decode from "jwt-decode";
export class AuthService {

	static login(credentials) {
		return instance.post('auth/login', credentials)
	}

	static isAuthenticated(){
		const token = CookieService.get('token'); 
		return token !== undefined;
	}

	static hasProfile(profile){
		const token = CookieService.get('token'); 
		const { role } = jwt_decode(token);
        return role === profile;
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