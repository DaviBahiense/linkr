import { useEffect, useState } from "react";
import { FaRetweet } from "react-icons/fa";
import ReactTooltip from "react-tooltip";
import useAuth from "../../hooks/useAuth";
import useUser from "../../hooks/useUser";
import api from "../../services/api";
import { StyledLike } from "../like/styledLike";
import ConfirmModal from "../Modal/Modal";

export default function Share({id}){
    const [repost, setRepost] = useState(false);
    const [data, setData] = useState()
    const [amountReposts, setAmountReposts] = useState(0)
    const {auth} = useAuth();
    const {user} = useUser();
    let textReposts = '';

    if (amountReposts === 1 && repost){
        textReposts = "Você"
    } else if (amountReposts === 1){
        textReposts = data[0]?.name
    } else if (amountReposts === 2 && repost){
        const aux = data?.filter(element => element.id !== user.id)
        textReposts = `Você e ${aux[0].name}`
    } else if (amountReposts === 2){
        textReposts = `${data[0]?.name} e ${data[1]?.name}`
    } else if (amountReposts > 2 && repost){
        const aux = data?.filter(element => element.id !== user.id)
        textReposts = `Você, ${aux[0].name} e ${amountReposts > 3? `outras ${amountReposts - 2} pessoas`:`outra 1 pessoa`}`
    } else if (amountReposts > 2){
        textReposts = `${data[0]?.name}, ${data[1]?.name} e ${amountReposts > 3? `outras ${amountReposts - 2} pessoas`:`outra 1 pessoa`}`
    }

    function handleRepost(){
        let confirm
        if(!repost){
            confirm = window.confirm("quer mesmo dar rt?");
        }

        if(confirm || repost){
            repost? setAmountReposts(amountReposts-1):setAmountReposts(amountReposts+1)
            api.postRepost(auth, id, `${repost?'unrepost':'repost'}`).then(response => {
                setRepost(!repost)
                handleAmountReposts()
            }).catch(error => {
                console.error(error.response)
                setRepost(repost)
            })
        }
    }

    function handleAmountReposts(){
        api.getReposts(auth, id).then(response => {
            setData(response.data)
            setAmountReposts(response.data.length)
            const repostUser = response.data.find(element => element.id === user.id)
            if(repostUser){
                setRepost(true)
            } else {
                setRepost(false);
            }
        })
    }

    useEffect(()=>{
        handleAmountReposts()
    }, [])

    return(
        <StyledLike>
            <FaRetweet color={'#ffffff'} size={'20px'} onClick={handleRepost}/>
            <a data-tip={textReposts}> {amountReposts} {amountReposts > 1? 're-posts':'re-post'} </a>
            <ReactTooltip place="bottom" type="light" effect="solid"/>
        </StyledLike>
    )
}