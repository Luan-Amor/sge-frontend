import instance from './ApiService'
export class UserService {

	static getUser() {
		return instance.get('user');
	}

    static createUser(input) {
        return instance.post('users', input)
				.then(data => data);
    }

    static updateUser(input) {
        return instance.put('users', input)
				.then(data => data);
    }
}