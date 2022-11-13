import { useState, useCallback } from "react";
import { EventService } from "../services/EventService";

export const useEvent = (id) => {

    const [event, setEvent] = useState({}); 

    const getEvent = useCallback(async () => {
        const {status, data } = await EventService.getEventById(id);
        if(status !== 200) throw new Error();
        setEvent(data)

    },[id])


    return {event, getEvent}

} 