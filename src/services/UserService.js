import instance from './ApiService'
export class UserService {

	static getUser() {
		return instance.get('user');
	}

    static createUser(input) {
        return instance.post('users', input)
				.then(data => data);
    }
}