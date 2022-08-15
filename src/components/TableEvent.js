import moment from "moment";
import { FaEye} from "react-icons/fa"
import { Link } from "react-router-dom";

export const TableEvent = ({events}) => {

    function formatDate(data){
        return moment(data).format('DD/MM/YYYY HH:mm' )
    }

    return (
        <table className="table  table-striped table-responsive">
            <thead className="table-primary">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nome</th>
                    <th scope="col">Valor</th>
                    <th scope="col">Total de Vagas</th>
                    <th scope="col">Data Início</th>
                    <th scope="col">Data Fim</th>
                    <th scope="col">Ações</th>
                </tr>
            </thead>
            <tbody className="table-light">
                {events.map((event, i) => 
                    <tr key={i}>
                        <th scope="row">{i + 1}</th>
                        <td>{event.name}</td>
                        <td>{event.ticket_price}</td>
                        <td>{event.spots}</td>
                        <td>{formatDate(event.start_event_date)}</td>
                        <td>{formatDate(event.end_event_date)}</td>
                        <td><Link to={`/events/${event.id}`}><span>{<FaEye size={"24"}/>}</span></Link></td>
                    </tr>
                )}
            </tbody>
        </table>
    )
} 