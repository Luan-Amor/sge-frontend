import axios from "axios";

const instance = axios.create({
	baseURL: 'http://localhost:3333/',
	timeout: 1000
});

export class AuthService {
	static login(credentials) {
		return instance.post('login', credentials)
	}
}