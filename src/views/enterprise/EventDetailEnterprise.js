import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useEvent } from "../../hooks/useEvent";
import imageEvent from '../../assets/images/evento.png';
import { useEnrollments } from "../../hooks/useEnrollmentsByEvent";
import moment from "moment";
import { FaRegCalendarAlt, FaMapMarkedAlt} from 'react-icons/fa'
import ReactPlayer from 'react-player'

export const EventDatailEnterprise = () => { 
    const { id } = useParams();

    function formatDate(data){
        return moment(data).format('DD/MM/YYYY HH:mm' )
    }

    const {enrollments, getEnrollments } = useEnrollments(id);
    const {event, getEvent } = useEvent(id);

    function enrollmentsPaid(){
        if(enrollments && enrollments.length ){
            const result = enrollments.filter(enroll => enroll.paid === true);
            return result.length;
        }
    }
    
    useEffect(() => { getEnrollments() }, [getEnrollments])
    useEffect(() => { getEvent() }, [getEvent])

    return (
        <div className="container">
            <img src={imageEvent} className="img-fluid w-100 shadow mb-5" alt="..."></img>
            <div className="row mb-5">

                <div className="col-9">
                    <h1>{event.name}</h1>
                    <div className="mb-3">
                        <small className="text-muted"><FaRegCalendarAlt className="mb-1"/> {formatDate(event.startEventDate)} - {formatDate(event.endEventDate)} 
                        <br/><FaMapMarkedAlt className="mb-1"/> PUC MINAS | vagas {event.spots}</small>
                    </div>
                    <h3>Descrição</h3>
                    <p>{event.description}</p>
                    <h3>Orador</h3>
                    <p>{event.speaker}</p>

                    <table className="table  table-striped table-responsive">
                        <thead className="table-primary">
                            <tr>
                                <th scope="col">Nome do evento</th>
                                <th scope="col">Valor</th>
                                <th scope="col">Total de Vagas</th>
                                <th scope="col">Data Início</th>
                                <th scope="col">Data Fim</th>
                                <th scope="col">Qtd. Pagos</th>
                            </tr>
                        </thead>
                        <tbody className="table-light">
                            <tr>
                                <td>{event.name}</td>
                                <td>{event.ticketPrice <= 0 ? 'Grátis': `R$ ${event.ticketPrice}`}</td>
                                <td>{`${enrollments.length} / ${event.spots}`}</td>
                                <td>{formatDate(event.startEventDate)}</td>
                                <td>{formatDate(event.endEventDate)}</td>
                                <td>{enrollmentsPaid()}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="col-3">
                    <button className="btn btn-primary">Editar</button>
                </div>
            </div>
        </div>
    )
}