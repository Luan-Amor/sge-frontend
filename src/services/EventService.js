import instance from './ApiService'
export class EventService {
	

	api = instance()

	static getEvents() {
		return instance().get('events');
	}

	static getEventById(id){
		return instance().get(`events/${id}`);
	}

	static getEventOfUser(token){
		return instance().get(`events/users`, { headers: { Authorization: `Bearer ${token}`}});
	}

	static create(dto){
		return instance().post('/events', dto )
	}
}