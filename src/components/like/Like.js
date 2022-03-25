import { StyledLike } from "./styledLike";
import {FaHeart} from 'react-icons/fa';
import {FiHeart} from 'react-icons/fi';
import ReactTooltip from "react-tooltip";
import { useState } from "react";
import api from "../../services/api"
import useAuth from "../../hooks/useAuth";

export default function Like({id}){
    const [like, setLike] = useState(false);
    const [data, setData] = useState()
    const [amountLikes, setAmountLikes] = useState(0)
    const {auth} = useAuth();

    function handleLike(){
        if(like){
            api.postLike(auth, id, 'unlike')?.then(response => {
                setData(response.data)
            }).catch(error => {
                console.error(error.response.status)
            })
        } else {
            api.postLike(auth, id, 'like')?.then(response => {
                setData(response.data)
            }).catch(error => {
                console.error(error.response.status)
            })
        }
        setLike(!like)
    }

    return (
        <StyledLike>
            {like? <FaHeart onClick={handleLike} color={'#AC0000'} className="icons"/>:
            <FiHeart onClick={handleLike} color={'#FFFFFF'} className="icons"/>}
            <a data-tip="sdsdsd"> {amountLikes} {amountLikes > 1? 'likes':'like'} </a>
            <ReactTooltip place="bottom" type="light" effect="solid"/>
        </StyledLike>
    )
}