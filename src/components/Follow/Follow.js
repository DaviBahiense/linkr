import { useEffect } from "react";
import { useState } from "react"
import useAuth from "../../hooks/useAuth.js";
import useUser from "../../hooks/useUser.js";
import api from "../../services/api.js";
import {Button} from "./style.js"

export default function Follow({id}){
    const [follow, setFollow] = useState(false);
    const [block, setBlock] = useState(false);
    const {auth} = useAuth();
    const {user} = useUser();

    function handleFollow() {
        setBlock(true);
        
        api.postFollow(auth, id, `${follow?'unfollow':'follow'}`).then(response => {
            setBlock(false);
            setFollow(!follow)
        }).catch((err)=>{
            setBlock(false);
            alert("Erro, tente novamente");
        });
    }

    useEffect(()=>{
        api.getFollow(auth, id).then(response => {
            setFollow(response.data.userId === user.id)
        })
    }, [follow])

    return(
        <Button block={block} follow={follow} onClick={handleFollow}>
            {follow ? "Unfollow" : "Follow"}
        </Button>
    )
}