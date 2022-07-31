import brasao from '../assets/images/brasao-peq.png';
import '../assets/css/style.css';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";

export const Header = () => {

    const {name, token} = useSelector((state) => state );

    return (
        <header className='header_flex mb-3'>
            <Link to={'/'}><img src={brasao} alt="Brasão Puc Minas"></img></Link>
            <h3>Sistema de Gerenciamento de Eventos - SGE</h3>

            { token.token ? 
                <Link to={'/users'}><h5>{name.name}</h5></Link> : 
                <Link to={'/login'}><button className="btn btn-primary">login</button></Link>
            }
        </header>
    )
}