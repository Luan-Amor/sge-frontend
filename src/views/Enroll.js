import { useParams } from "react-router-dom";
import { useEvent } from "../hooks/useEvent";
import QRCode from "react-qr-code";
import moment from "moment";
import { FaRegCalendarAlt, FaMapMarkedAlt} from 'react-icons/fa'
import { AuthService } from "../services/AuthService";

export const Enroll = () => {

    const { id } = useParams();

    const { id: idUser } = AuthService.getTokenDecode();

    const [event] = useEvent(id);

    function formatDate(data){
        return moment(data).format('DD/MM/YYYY HH:mm' )
    }

    return (
        <div className="container">
            <div className="d-flex flex-column align-items-center">
                <div className="mb-3">
                    <h1>{event.name}</h1>
                    <small className="text-muted"><FaRegCalendarAlt className="mb-1"/> {formatDate(event.start_event_date)} - {formatDate(event.end_event_date)} 
                <br/><FaMapMarkedAlt className="mb-1"/> PUC MINAS </small>
                </div>

                <QRCode value={`http://localhost:3333/enrollments/${id}/${idUser}`}></QRCode>
            </div>

        </div>
    )
}