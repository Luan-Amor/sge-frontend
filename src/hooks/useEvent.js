import { useEffect, useState } from "react";
import { EventService } from "../services/EventService";

export const useEvent = (id) => {

    const [event, setEvent] = useState([]); 
    let isMounted = true;

    useEffect(() => {
        EventService.getEventById(id)
            .then(({data}) => {
                if(isMounted){
                    console.log(data)
                    setEvent(data)
                }
            })
            return () => { isMounted = false; }
        },[])

    return [event, setEvent]

} 