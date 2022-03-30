import { StyledLike } from "./styledLike";
import {FaHeart} from 'react-icons/fa';
import {FiHeart} from 'react-icons/fi';
import ReactTooltip from "react-tooltip";
import { useEffect, useState } from "react";
import api from "../../services/api"
import useAuth from "../../hooks/useAuth";
import useUser from "../../hooks/useUser";

export default function Like({id}){
    const [like, setLike] = useState(false);
    const [data, setData] = useState()
    const [amountLikes, setAmountLikes] = useState(0)
    const {auth} = useAuth();
    const {user} = useUser();
    let textLikes = '';

    if (amountLikes === 1 && like){
        textLikes = "Você"
    } else if (amountLikes === 1){
        textLikes = data[0]?.name
    } else if (amountLikes === 2 && like){
        const aux = data?.filter(element => element.id !== user.id)
        textLikes = `Você e ${aux[0].name}`
    } else if (amountLikes === 2){
        textLikes = `${data[0]?.name} e ${data[1]?.name}`
    } else if (amountLikes > 2 && like){
        const aux = data?.filter(element => element.id !== user.id)
        textLikes = `Você, ${aux[0].name} e ${amountLikes > 3? `outras ${amountLikes - 2} pessoas`:`outra 1 pessoa`}`
    } else if (amountLikes > 2){
        textLikes = `${data[0]?.name}, ${data[1]?.name} e ${amountLikes > 3? `outras ${amountLikes - 2} pessoas`:`outra 1 pessoa`}`
    }

    console.log({auth, id})

    function handleLike(){
        api.postLike(auth, id, `${like?'unlike':'like'}`).then(response => {
            setLike(!like)
        }).catch(error => {
            console.error(error.response)
        })
    }

    useEffect(()=>{
        api.getLikes(auth, id).then(response => {
            setData(response.data)
            setAmountLikes(response.data.length)
            const likeUser = response.data?.find(element => element.id === user.id)
            if(likeUser){
                setLike(true)
            } else {
                setLike(false);
            }
        })
    }, [like])

    return (
        <StyledLike>
            {like? <FaHeart onClick={handleLike} color={'#AC0000'} className="icons"/>:
            <FiHeart onClick={handleLike} color={'#FFFFFF'} className="icons"/>}
            <a data-tip={textLikes}> {amountLikes} {amountLikes > 1? 'likes':'like'} </a>
            <ReactTooltip place="bottom" type="light" effect="solid"/>
        </StyledLike>
    )
}