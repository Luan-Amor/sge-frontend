import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { EventService } from "../services/EventService";


export const EventDetail = () =>{
    const {id} = useParams();

    const [event, setEvent] = useState({})

    const getEvent = async () => {
        const {data} = await EventService.getEventById(id);
        setEvent(data);
    }

    useEffect(() => {
        getEvent();
    })

    return (
        <div>
            <h1>{event.name}</h1>
            <p>{event.description}</p>
            <p>{event.speaker}</p>
            <p>{event.start_event_date}</p>
            <p>{event.ticket_price}</p>
        </div>
    )
}