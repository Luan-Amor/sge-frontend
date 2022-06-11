import brasao from '../assets/images/brasao-peq.png';
import '../assets/css/style.css';
import { Link } from 'react-router-dom';
import { useCookies } from 'react-cookie'
import { useEffect } from 'react';


export const Header = () => {
    const [cookies] = useCookies(['token'])

    const isAuthenticated = () => {
        return !(cookies.token === undefined) 
    }

    useEffect(() => {
        isAuthenticated()
    })

    return (
        <header className='header_flex mb-3'>
            <Link to={'/'}><img src={brasao} alt="Brasão Puc Minas"></img></Link>
            <h3>Sistema de Gerenciamento de Eventos - SGE</h3>
            { isAuthenticated() ? <p>Nome Usuário</p> : <Link to={'/login'}><button className="btn btn-primary">login</button></Link>}
        </header>
    )
}