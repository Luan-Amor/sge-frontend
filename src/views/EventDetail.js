import { useParams, Link, useNavigate } from "react-router-dom";
import { useEvent } from "../hooks/useEvent";
import imageEvent from '../assets/images/evento.png';
import moment from "moment";
import { FaRegCalendarAlt, FaMapMarkedAlt} from 'react-icons/fa'
import ReactPlayer from 'react-player'
import { useEventEnrollList } from "../hooks/useEventEnrollList";
import { useEffect, useState } from "react";
import { EnrollService } from "../services/EnrollService";

export const EventDetail = () => {
    const {id} = useParams();

    const [event] = useEvent(id);
    const [enrolls] = useEventEnrollList();
    const [enroll, setEnroll] = useState();
    const navigate = useNavigate();

    function formatDate(data){
        return moment(data).format('DD/MM/YYYY HH:mm' )
    }

    const userIsEnroll = () => {
        setEnroll(enrolls.find((enroll) => ( enroll.event_id === parseInt(id))))
    }

    async function handleSubmit(event){
        event.preventDefault();

        try {
            await EnrollService.enrollOnEvent(id)
        } catch (error) {
            console.log(error)
            if(error.response.status === 401){
                navigate('/login')
            }
        }
    }

    useEffect(() => {
        userIsEnroll()
    })

    return (
        <div className="container">
            <img src={imageEvent} className="img-fluid w-100 shadow mb-5" alt="..."></img>
            <div className="row mb-5">
                <div className="col-9">
                <h1>{event.name}</h1>
                <div className="mb-3">
                <small className="text-muted"><FaRegCalendarAlt className="mb-1"/> {formatDate(event.start_event_date)} - {formatDate(event.end_event_date)} 
                <br/><FaMapMarkedAlt className="mb-1"/> PUC MINAS | vagas {event.spots}</small>
                </div>
                    <h3>Descrição</h3>
                    <p>{event.description}</p>
                </div>
                <div className="col border">
                    <h3>Orador</h3>
                    <p>{event.speaker}</p>
                    {
                        enroll ?
                            enroll.paid ?
                                <div>
                                    <h3>Valor</h3>
                                    {event.ticket_price === '0' ? <p className="text-success h5">Grátis</p> : <p className="h5">R$ {event.ticket_price}</p> }
                                    <p className="text-muted">Inscrito</p>
                                    <Link to={`/enroll/${id}`} >
                                        <button className="btn btn-success w-100 shadow mb-5" >Convite</button>
                                    </Link>
                                </div>
                                :
                                <div>
                                    <h3>Valor</h3>
                                    {<p className="h5">R$ {event.ticket_price}</p>}
                                    <p className="text-muted">Inscrito - Pagamento pendente</p>
                                        <button className="btn btn-success w-100 shadow mb-5" >Pagar</button>
                                </div>
                        :                        
                            <form onSubmit={handleSubmit}>
                                <h3>Valor</h3>
                                {event.ticket_price === '0' ? <p className="text-success h5">Grátis</p> : <p className="h5">R$ {event.ticket_price}</p> }
                                <button type="submit" className="btn btn-success w-100 shadow mb-5" >Participar</button>
                            </form>
                    }
                </div>
            </div>
            <div className="d-flex justify-content-between flex-nowrap mb-5">
                { event.videos ? event.videos.map((video, index) => 
                ( <ReactPlayer key={index} url={video.url}/> )) 
                : <hr/> }
            </div>
        </div>
    )
}