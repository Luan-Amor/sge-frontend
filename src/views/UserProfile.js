
import { useUser } from "../hooks/useUser";

export const UserProfile = () => {

    const [user] = useUser()

    
    return (
        <div className="container">
            <h1>{user.name}</h1>
        </div>
    );
}

// city: "Brasília"
// cpfCnpj: "11.111.111/0001.11"
// email: "gm@email.com"
// gender: null
// name: "GM"
// state: "DF"