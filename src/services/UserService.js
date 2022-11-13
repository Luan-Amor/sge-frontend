import instance from './ApiService'
export class UserService {

	static getUser(id) {
		return instance.get(`users/${id}`);
	}

    static createUser(input) {
        return instance.post('users', input)
				.then(data => data);
    }

    static updateUser(id, input) {
        return instance.put(`users/${id}`, input)
				.then(data => {
          console.log(data);
          return data
        });
    }
}