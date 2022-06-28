import { useParams } from "react-router-dom";
import { useEvent } from "../hooks/useEvent";
import imageEvent from '../assets/images/evento.png';
import moment from "moment";
import { FaRegCalendarAlt, FaMapMarkedAlt} from 'react-icons/fa'
import { AuthService } from "../services/AuthService";
import { Profile } from "../config/profiles";
import { Link } from "react-router-dom";


export const EventDetail = () =>{
    const {id} = useParams();

    const [event] = useEvent(id);

    function formatDate(data){
        return moment(data).format('DD/MM/YYYY HH:mm' )
    }

    function canEnroll(){
        return !(AuthService.hasProfile(Profile.ENTERPRISE) || AuthService.hasProfile(Profile.ADMIN))
    }

    return (
        <div className="container">
            <img src={imageEvent} className="img-fluid w-100 shadow mb-5" alt="..."></img>
            <div>
                <h1>{event.name}</h1>
                <div className="mb-3">
                <small className="text-muted"><FaRegCalendarAlt className="mb-1"/> {formatDate(event.start_event_date)} - {formatDate(event.end_event_date)} 
                <br/><FaMapMarkedAlt className="mb-1"/> PUC MINAS | vagas {event.spots}</small>
                </div>
                <h3>Descrição</h3>
                <p>{event.description}</p>
                <h3>Orador</h3>
                <p>{event.speaker}</p>
                <h3>Valor</h3>
                <p>{event.ticket_price === '0' ? 'Grátis' : 'R$ ' + event.ticket_price }</p>
            </div>
            <Link to={'/enroll'}><button className="btn btn-success w-25 shadow mb-5"  >Participar</button></Link>
        </div>
    )
}