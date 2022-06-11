import { useEffect, useState } from "react";
import { EventService } from "../services/EventService";
import { Link } from "react-router-dom";

export const EventList = () => {

    const [events, setEvents] = useState([]); 

    const getEvents = async () => {
        const {data} = await EventService.getEvents();
        setEvents(data)
    }

    useEffect(() => {
        getEvents();
    }, [])

    return (
        <ul>
            { events.map(ev => (<Link key={ev.id} to={`/events/${ev.id}`}><li>{ev.name}</li></Link> )) }
        </ul>
    )
}