import { useState } from "react";
import { useAlert } from "react-alert";
import { useNavigate } from "react-router-dom";
import { UserService } from "../services/UserService";


export const SingUp = () => {

    const [inputs, setInputs] = useState({});
    const [checkboxEnterprese, setCheckboxEntreprise] = useState(false)
    const navigate = useNavigate();

    const alert = useAlert();

    const handleChange = (event) => {
        if(event.target.type === 'checkbox'){
            setCheckboxEntreprise(event.target.checked);
        }else{
            const name = event.target.name;
            const value = event.target.value;
            setInputs(values => ({...values, [name]: value}))
        }
    }



    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await UserService.createUser(inputs);

            await alert.success('Usuário criado com sucesso.')

            navigate('/login', { replace: true})
        } catch (error) {
            if(error.response.status === 400){
                alert.error('Não foi possível criar o usuário. Verifique as informações e tente novamente. ')
            }
        }
    }

    return (
        <>
        <div className="container d-flex flex-column align-items-center justify-content-center p-5">
            <form onSubmit={handleSubmit} className="row g-2 w-50 border shadow p-2">
                <h4 className="">Cadastro</h4>
                <div className="col-12">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" onChange={handleChange} />
                        <label className="form-check-label" >Empresa</label>
                    </div>
                </div>
                <div className="col-md-6">
                    <label className="form-label">Nome</label>
                    <input type="text" className="form-control"  
                        name="name" 
                        value={inputs.name || ""}  
                        onChange={handleChange} required/>
                </div>
                <div className="col-md-6">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" 
                            name="email" 
                            value={inputs.email || ""}  
                            onChange={handleChange} required />
                </div>
                {
                    !checkboxEnterprese ?
                        <>
                            <div className="col-md-8">
                                <label className="form-label">CPF</label>
                                <input type="text" className="form-control"
                                    name="cpfCnpj" 
                                    value={inputs.cpfCnpj || ""}
                                    onChange={handleChange} required />
                            </div>
                            <div className="col-md-4">
                                <label className="form-label">Sexo</label>
                                <select className="form-select" name="gender" value={inputs.gender} onChange={handleChange}>
                                    <option defaultValue={''}>Selecionar</option>
                                    <option value={'M'}>Masculino</option>
                                    <option value={'F'}>Feminino</option>
                                </select>
                            </div>
                            <div className="col-md-12">
                                <label className="form-label">Senha</label>
                                <input type="password" className="form-control" 
                                    name="password" 
                                    value={inputs.password || ""}
                                    onChange={handleChange} required />
                            </div>
                        </>
                        :
                        <>
                            <div className="col-md-6">
                                <label className="form-label">CNPJ</label>
                                <input type="text" className="form-control" 
                                    name="cpfCnpj" 
                                    value={inputs.cpfCnpj || ""}
                                    onChange={handleChange} required />
                            </div>
                            <div className="col-md-6">
                                <label className="form-label">Senha</label>
                                <input type="password" className="form-control" 
                                    name="password" 
                                    value={inputs.password || ""}
                                    onChange={handleChange} required />
                            </div>
                        </>
                }
                <div className="col-md-6">
                    <label className="form-label">Cidade</label>
                    <input type="text" className="form-control"
                        name="city" 
                        value={inputs.city || ""}
                        onChange={handleChange} />
                </div>
                <div className="col-md-6">
                    <label className="form-label">Estado</label>
                    <input type="text" className="form-control" 
                        name="state"
                        value={inputs.state || ""}
                        onChange={handleChange} />
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-primary w-100">Cadastrar</button>
                </div>
            </form>
        </div>
        </>
        
    )
}