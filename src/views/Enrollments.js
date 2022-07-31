import {useEventEnrollList} from '../hooks/useEventEnrollList';
import { Link } from "react-router-dom";
import { Card } from '../components/Card';

export const Enrollments = () => {

    const [enrolls] = useEventEnrollList();



    return (
        <div className="container">

            <span className='h4'>Inscritos</span>
            <hr style={{"height":"2px", "color":"gray"}} />
            <div className='d-flex mb-5'>
                {
                    enrolls.map((enroll, i) => { 
                        if(enroll.paid){
                            return <Link to={`/events/${enroll.event_id}`} key={i}>
                                        <Card item={enroll.event}></Card>
                                    </Link>
                        }
                        return []
                    })
                }
            </div>
            <span className='h4'>Pendente de pagamento</span>
            <hr style={{"height":"2px", "color":"gray"}} />
            <div className='d-flex'>
                {
                    enrolls.map((enroll, i) => { 
                    if(!enroll.paid){
                        return <Link to={`/events/${enroll.event_id}`} key={i}>
                                    <Card item={enroll.event}></Card>
                                </Link>
                    }
                    return []
                } )
                }
            </div>
        </div>
    )
}