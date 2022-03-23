import { useEffect, useState } from "react";
import api from "../../services/api";
import TopBar from "./TopBar";
import useAuth from "../../hooks/useAuth";

export default function Home(){
    const { auth } = useAuth();
    const [user, setUser] = useState(null);
    
    useEffect(() => {
        handleUser();
      }, []);

    async function handleUser() {
        try {
            const {data} = await api.getUser(auth);
            setUser(data)
            
        } catch (error) {
            console.log(error)
            alert("Erro, tente novamente");
        }
      }
    return (
        <TopBar {...user}/>
    )
}

