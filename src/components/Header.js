import brasao from '../assets/images/brasao-peq.png';
import '../assets/css/style.css';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import { CookieService } from '../services/CookieService';
import { FiLogOut } from 'react-icons/fi'


export const Header = () => {

    const {name, token} = useSelector((state) => state );

    async function logOff(){
        await localStorage.clear();
        await CookieService.remove('token');
        window.location.reload(false);
    }

    return (
        <header className='header_flex mb-3'>
            <Link to={'/'}><img src={brasao} alt="Brasão Puc Minas"></img></Link>
            <h3>Sistema de Gerenciamento de Eventos - SGE</h3>

            { token.token ? 
                <span className='header_flex'>
                    <Link to={'/users'}><h4 className='lead'>{name.name} </h4></Link>&emsp;
                    <span className='pointer' onClick={() => logOff()}><FiLogOut/></span>
                </span> 
                : 
                <Link to={'/login'}><button className="btn btn-primary">login</button></Link>
            }
        </header>
    )
}