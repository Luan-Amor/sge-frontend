import { Card } from '../components/Card';
import { useEffect } from "react";
import { useEventList } from '../hooks/useEventList'
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { AuthService } from '../services/AuthService';
import { Profile } from '../config/profiles';
import { TableEvent } from '../components/TableEvent'

export const Home = () => {

    const {events, getAll} = useEventList();

    const { token } = useSelector(state => state);

    const { perfil } = AuthService.decodeToken(token.token)

    useEffect(() => {
        getAll();
    },[getAll])
    return (
        <div className='container'>
            <div className='d-flex flex-wrap'>
                {
                    perfil === Profile.ADMIN ?
                    <h1>ADMIN</h1>
                    :
                    perfil === Profile.ORGANIZER ?
                    <TableEvent events={events} />
                    :
                    events.map((event, i) => 
                    <Link to={`/events/${event.id}`} key={i}>
                        <Card item={event}></Card>
                    </Link>
                    )
                }
            </div>
        </div>
    )

}