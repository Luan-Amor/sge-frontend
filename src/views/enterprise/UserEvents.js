import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { EventService } from "../../services/EventService";
import { TableEvent } from "../../components/TableEvent"


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
                <TableEvent events={events} />
            </div>
        </div>
    )
}