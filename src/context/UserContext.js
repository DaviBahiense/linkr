import { useEffect, useState } from "react";
import { createContext } from "react";
import useAuth from "../hooks/useAuth";
import api from "../services/api";

const UserContext = createContext();

export function UserProvider({children}){
    const [user, setUser] = useState();
    const {auth} = useAuth();

    useEffect(()=>{
        if(auth){
            api.getUser(auth)?.then(response => {
                setUser(response.data);
            }).catch(error => {
                console.log(error.response);
            })
        }
    }, [setUser, auth])
    return(
        <UserContext.Provider value={{user}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext;