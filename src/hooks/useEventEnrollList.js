import { useEffect, useState } from "react";
import { AuthService } from "../services/AuthService";
import { EnrollService } from "../services/EnrollService";

export const useEventEnrollList = () => {

    const [events, setEvents] = useState([]); 

    const getAllEvents = async () => {
        if(AuthService.isAuthenticated()){
            const {data} = await EnrollService.getEventsEnroll();
            setEvents(data)
        }
    }

    useEffect(() => {
        getAllEvents();
    }, [])

    return [events, setEvents]

} 