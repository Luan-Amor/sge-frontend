import { Card } from '../components/Card';
import { useEventList } from '../hooks/useEventList'
import { Link } from "react-router-dom";

export const Home = () => {

    const [events] = useEventList();

    return (
        <div className='container'>
            <div className='d-flex flex-wrap'>
                {events.map((event, i) => <Link to={`/events/${event.id}`} key={i}><Card item={event}></Card></Link>)}
            </div>
        </div>
    )

}