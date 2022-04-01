import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Timeline from "../../components/posts/Timeline";
import useAuth from "../../hooks/useAuth";
import useUser from "../../hooks/useUser"
import api from "../../services/api";
import { Feed, PostContainer } from "../Home/style";
import TopBar from "../../components/TopBar/TopBar.js";
import { Title } from "./style";
import Follow from "../../components/Follow/Follow";
import HashtagBox from "../../components/HashtagBox";
import { Main } from "../Hashtag/style";
import SearchBox from "../../components/SearchBox/SearchBox";

export default function User() {
    const [posts, setPosts] = useState([])
    const [loadingPosts, setLoadingPosts] = useState(true);
    const [userData, setUserData] = useState()
    const { user } = useUser();
    const { auth } = useAuth();
    const { id } = useParams()

    async function handleUser() {
        const { data } = await api.getUserId(auth, id)
        setUserData(data)
    }

    async function renderPage() {
        api.getPosts(auth).then(response => {
            setPosts(response.data.filter(element => element.userId === Number(id)));
            setLoadingPosts(false);
        })
    }

    useEffect(() => {
        renderPage()
        handleUser();
    }, [id])

    return (
        <Main>
            <TopBar {...user} />
            <Feed>
                <SearchBox type={"timeline"}></SearchBox>
                <PostContainer>
                    <Title >
                        <div>
                            <img src={userData?.img} alt="userPhoto" />
                            <h1>{`${userData?.name}'s posts`}</h1>
                        </div>
                        {user.id !== Number(id) && <Follow id={id} />}
                    </Title>
                    <Timeline posts={posts} loadingPosts={loadingPosts} />
                </PostContainer>
            </Feed>
            <HashtagBox reloadPosts={renderPage} />
        </Main>
    )
}