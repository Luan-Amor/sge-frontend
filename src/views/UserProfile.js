
import { useState } from "react";
import { useUser } from "../hooks/useUser";
import { UserService } from "../services/UserService";

export const UserProfile = () => {

    const [isReadOnly, setReadOnly] = useState(true);
    const [inputs, setInputs] = useState({});

    const [user] = useUser()

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
            await UserService.updateUser(inputs);
        } catch (error) {
            console.log(error);
        }
        setReadOnly(true)
    }


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

// city: "Brasília"
// cpfCnpj: "11.111.111/0001.11"
// email: "gm@email.com"
// name: "GM"
// state: "DF"