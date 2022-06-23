import { Link } from "react-router-dom";
import { useEventList } from "../hooks/useEventList";

export const EventList = () => {

    const [events] = useEventList();

    return (
        <ul>
            { events.map(ev => (<Link key={ev.id} to={`/events/${ev.id}`}><li>{ev.name}</li></Link> )) }
        </ul>
    )
}