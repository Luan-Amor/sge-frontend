import instance from './ApiService';
import { CookieService } from './CookieService';
export class AuthService {


	static login(credentials) {
		return instance.post('login', credentials)
	}

	static isAuthenticated(){
		const token = CookieService.get('token'); 
		return token !== undefined;
	}

	static hasProfile(perfil){
		const profile = CookieService.get('perfil'); 
		if(profile){
            if (profile.some(p => p === perfil))
                return true;
		}
        return false;
	}

	static isAuth(perfil){
		return this.isAuthenticated() && this.hasProfile(perfil);
	}
}