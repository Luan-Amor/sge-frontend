import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Profile } from '../config/profiles';
import { AuthService } from '../services/AuthService';

export const Nav = () => {

    const [isEnterprise, setEnterprise] = useState(false);

    function userAuth(){
        setEnterprise(AuthService.isAuth(Profile.ENTERPRISE))
    }

    useEffect(() => { userAuth() })

    return (
    <nav className="navbar navbar-expand-lg mb-3" style={{'background': '#8bb4cf'}}>
        <div className="container-fluid">
            <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link to={'/'}><span className="nav-link active">Home</span></Link>
                    {
                        isEnterprise ? 
                            <>
                                <Link to={'/novo/evento'}><span className="nav-link active">Criar Evento</span></Link>
                                <Link to={'/eventos/criados'}><span className="nav-link">Meus Eventos</span></Link>
                            </>
                            :
                            ''
                    }
                </div>
            </div>
        </div>
    </nav>
    )
}
