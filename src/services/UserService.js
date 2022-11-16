import instance from './ApiService'
import { CookieService } from './CookieService';

export class UserService {

	static getUser(id) {
		return instance.get(`users/${id}`).catch(error => {
      if(error.response.status === 401){
        localStorage.clear();
        CookieService.remove('token');
      }
    });
	}

    static createUser(input) {
        return instance.post('users', input)
				.then(data => data);
    }

    static updateUser(id, input) {
        return instance.patch(`users/${id}`, input)
				.then(data => {
          return data
        }).catch(error => {
          if(error.response.status === 401){
            localStorage.clear();
            CookieService.remove('token');
          }
        });
    }
}