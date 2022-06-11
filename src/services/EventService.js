import axios from "axios";

const instance = axios.create({
	baseURL: 'http://localhost:3333/',
	timeout: 1000
});

export class EventService {
	static getEvents() {
		return instance.get('events');
	}

	static getEventById(id){
		return instance.get(`events/${id}`);
	}
}