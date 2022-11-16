import instance from './ApiService';

export class EnrollService {

	static getEventsEnroll() {
		return instance.get('enrollments')
	}

	static enrollOnEvent(eventId){
		return instance.post(`/enrollments/${eventId}`)
	}

	static enrollmentsByEvent(eventId){
		return instance.get(`/enrollments/events/${eventId}`)
	}

}