import axios from "axios";

const instance = axios.create({
	baseURL: 'http://localhost:3333/',
	timeout: 1000
});

export class UserService {
	static getUser() {
		return instance.get('user');
	}

    static createUser(input) {
        return instance.post('users', input)
				.then(data => data);
    }
}