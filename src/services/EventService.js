import instance from './ApiService'
export class EventService {

	static getEvents() {
		return instance.get('events');
	}

	static getEventById(id){
		return instance.get(`events/${id}`);
	}

	static getEventOfUser(){
		return instance.get(`events/users`);
	}

	static create(dto){
		return instance.post('/events', dto )
	}
}