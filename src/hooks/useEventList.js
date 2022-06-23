import { useEffect, useState } from "react";
import { EventService } from "../services/EventService";

export const useEventList = () => {

    const [events, setEvents] = useState([]); 

    const getAllEvents = async () => {
        const {data} = await EventService.getEvents();
        setEvents(data)
    }

    useEffect(() => {
        getAllEvents();
    }, [])

    return [events, setEvents]

} 