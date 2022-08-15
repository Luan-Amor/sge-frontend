import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Profile } from '../config/profiles';
import { AuthService } from '../services/AuthService';
import { useSelector } from "react-redux";

export const Nav = () => {

    const [isEnterprise, setEnterprise] = useState(false);
    const [isComum, setComum] = useState(false);
    const [isAdmin, setAdmin] = useState(false);
    const { token } = useSelector(state => state);

    const { perfil } = AuthService.decodeToken(token.token)

    function userAuth(perfil) {
        setEnterprise(perfil === Profile.ENTERPRISE)
        setComum(perfil === Profile.COMUM)
        setAdmin(perfil === Profile.ADMIN)
    }

    useEffect(() => { userAuth(perfil) })

    return (
        <nav className="navbar navbar-expand-lg mb-3" style={{ 'background': '#8bb4cf' }}>
            <div className="container-fluid">
                <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link to={'/'}><span className="nav-link active">Home</span></Link>
                        {
                            isEnterprise ?
                                <>
                                    <Link to={'/novo/evento'}><span className="nav-link active">Criar Evento</span></Link>
                                </>
                                :
                                isComum ?
                                    <>
                                        <Link to={'/usuarios/inscricoes'}><span className="nav-link">Meus Eventos</span></Link>
                                    </>
                                    :
                                    isAdmin ?
                                        <>
                                            <Link to={'/'}><span className="nav-link">Usuários</span></Link>
                                        </>
                                        : ''
                        }
                    </div>
                </div>
            </div>
        </nav>
    )
}
