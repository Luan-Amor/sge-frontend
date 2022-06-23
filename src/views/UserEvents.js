import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { EventService } from "../services/EventService";
import { Link } from "react-router-dom";
import { Card } from "../components/Card";


export const UserEvents = () => {

    const [events, setEvents] = useState([]); 
    const [cookie] = useCookies(['token'])
    
    const getEvents = async () => {
        const token = cookie.token
        const { data } = await EventService.getEventOfUser(token);
        setEvents(data)
    }
    
    useEffect(() => {
        getEvents();
    })

    return (
        <div className='container'>
            <div className='d-flex flex-wrap'>
                {events.map((event, i) => <Link to={`/events/${event.id}`} key={i}><Card item={event}></Card></Link>)}
            </div>
        </div>
    )
}