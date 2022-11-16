
import { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { useDispatch } from "react-redux";
import { useUser } from "../hooks/useUser";
import { AuthService } from "../services/AuthService";
import { UserService } from "../services/UserService";
import { addName } from "../store/actions";

export const UserProfile = () => {

    const [isReadOnly, setReadOnly] = useState(true);
    const [inputs, setInputs] = useState({});

    const dispatch = useDispatch();
    const alert = useAlert();

    const {user, getUser} = useUser();

    function updateUser() {
        setReadOnly(false)
    }

    const handleChange = (event) => {

        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const {id} = AuthService.getTokenDecode();
            await UserService.updateUser(id, inputs);

            if(inputs.name) { dispatch(addName(inputs.name)) }

            alert.success('Usuário atualizado com sucesso. ')

        } catch (error) {
            console.log(error);
            alert.error('Não foi possível atualizar o usuário.')
        }
        setReadOnly(true)
    }

    useEffect(() => {getUser()}, [getUser])


    return (
        <div className="container d-flex flex-column align-items-center justify-content-center">
            <form className="w-75 g-2 w-75 border shadow p-2">
                <div className="row">
                    <div className="col-md-12">
                        <label className="form-label">Nome</label>
                        <input type='text' className="form-control mb-2"
                            name="name" placeholder={user.name}
                            onChange={handleChange} value={inputs.name || ""}
                            readOnly={isReadOnly} />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Email</label>
                        <input type='email' className="form-control mb-2"
                            name="email" placeholder={user.email}
                            onChange={handleChange} value={inputs.email || ""}
                            readOnly={true} />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">CPF/CNPJ</label>
                        <input type='text' className="form-control mb-2"
                            value={user.cpfCnpj} readOnly={true} />
                    </div>
                    {!isReadOnly ?
                        <>
                            <div className="col-md-6">
                                <label>Senha atual</label>
                                <input type='password' className="form-control mb-2" />
                            </div>
                            <div className="col-md-6">
                                <label>Senha nova</label>
                                <input type='password' className="form-control mb-2"
                                    name="password"  onChange={handleChange} value={inputs.password || ""} />
                            </div>
                        </>
                        :
                        ''
                    }

                    <div className="col-md-4">
                        <label className="form-label">Sexo</label>
                        <input type='text' className="form-control mb-2"
                            value={user.gender === "M" ? "Masculino" : "Feminino"} readOnly={true} />
                    </div>
                    <div className="col-md-4">
                        <label className="form-label">Cidade</label>
                        <input type='texte' className="form-control mb-2"  
                            name='city'
                            onChange={handleChange} value={inputs.city || ''} 
                            placeholder={user.city} readOnly={isReadOnly} />
                    </div>
                    <div className="col-md-4">
                        <label className="form-label">Estado</label>
                        <input type='texte' className="form-control mb-2" 
                            name="state"
                            onChange={handleChange} value={inputs.state || ''} 
                            placeholder={user.state} readOnly={isReadOnly} />
                    </div>
                    <div className="col-md-10"></div>
                    <div className="col-md-2">
                        <input type='submit' onClick={handleSubmit} className="btn btn-danger m-2" value="Salvar" hidden={isReadOnly} />
                        <input type='button' onClick={updateUser} className="btn btn-success m-2" value="Alterar" hidden={!isReadOnly} />
                    </div>
                </div>
            </form>
        </div>
    );
}