import brasao from '../assets/images/brasao-peq.png';
import '../assets/css/style.css';
import { Link } from 'react-router-dom';
import { AuthService } from '../services/AuthService';

export const Header = ({ username }) => {


    return (
        <header className='header_flex mb-3'>
            <Link to={'/'}><img src={brasao} alt="Brasão Puc Minas"></img></Link>
            <h3>Sistema de Gerenciamento de Eventos - SGE</h3>

            {  AuthService.isAuthenticated() ? 
                <Link to={'/users'}><h5>{username}</h5></Link> : 
                <Link to={'/login'}><button className="btn btn-primary">login</button></Link>
            }
        </header>
    )
}