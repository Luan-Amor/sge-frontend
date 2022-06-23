import { useCookies } from 'react-cookie';
import { Link } from 'react-router-dom';

export const Nav = () => {
    const [cookies] = useCookies(['perfil', 'token'])

    const isAuth = (perfil) => {
        
        if (!cookies.token) {
			return false;
		}
		if(cookies.perfil){
            if (!cookies.perfil.some(p => p === perfil))
                return false;
		}
        return true;
    }
    return (
    <nav className="navbar navbar-expand-lg mb-3" style={{'background': '#8bb4cf'}}>
        <div className="container-fluid">
            <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link to={'/'}><span className="nav-link active">Home</span></Link>
                    {
                        isAuth('Enterprise') ? 
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
