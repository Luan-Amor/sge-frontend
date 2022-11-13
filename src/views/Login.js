import { useDispatch } from "react-redux";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useState } from 'react';
import { AuthService } from '../services/AuthService';
import { CookieService } from '../services/CookieService';
import { addName, addToken } from '../store/actions'
import jwt_decode from "jwt-decode";

export const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    let navigate = useNavigate();
    let location = useLocation();

    const dispatch = useDispatch();

    let from = location.state?.from?.pathname || "/";

    const handleSubmit = async e => {
        e.preventDefault();

        const { access_token } = await AuthService.login({ email, password })
            .then(({ data }) => data);

            
        const {name} = jwt_decode(access_token)

        dispatch(addName(name))
        dispatch(addToken(access_token))

        CookieService.set('token', JSON.stringify(access_token), { path: '/', expires: new Date(Date.now() + 3600000 ) })

        navigate(from, { replace: true });
    }

    return (
        <div className="container d-flex justify-content-center p-5">
            <div className='w-25 border shadow d-flex flex-column align-items-center'>
                <h4 className='p-2'>Login</h4>
                <form onSubmit={handleSubmit}>
                    <div className="form-floating mb-2">
                        <input type="email" className="form-control" onChange={e => setEmail(e.target.value)} />
                        <label>Email</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="password" className="form-control" onChange={e => setPassword(e.target.value)} />
                        <label>Senha</label>
                    </div>
                    <button type="submit" className='btn btn-primary w-100 mb-3'>Entrar</button>
                </form>
                <Link to={'/singup'}> <p className='small text-muted'>Cadastrar</p></Link>
            </div>
        </div>
    )
}