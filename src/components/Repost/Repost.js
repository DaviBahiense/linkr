import { FaRetweet } from "react-icons/fa";
import Post from "../../pages/Home/Post";
import { ContainerRepost, InfoRepost, LinkSpan } from "./styleRepost";

export default function Repost (p){
    return(
        <ContainerRepost>
            <InfoRepost>
                <FaRetweet color={'#ffffff'} size={'20px'} />
                <p>Re-posted by <LinkSpan to={`/user/${p.reposterById}`}>{p.reposterByName}</LinkSpan></p>
            </InfoRepost>
            <Post {...p} />
        </ContainerRepost>
    )
}