import { useEffect, useState } from "react";
import api from "../../services/api";
import TopBar from "./TopBar";
import useAuth from "../../hooks/useAuth";
import styled from "styled-components";

export default function Home() {
  const { auth } = useAuth();
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    handleUser();
  }, []);

  async function handleUser() {
    try {
      const { data } = await api.getUser(auth);
      setUser(data);
      renderPosts();
    } catch (error) {
      console.log(error);
      alert("Erro, tente novamente");
    }
  }

  async function renderPosts() {
    try {
      const { data } = await api.getPosts(auth);
      setPosts(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <TopBar {...user} />
      <Feed>
        <h1>timeline</h1>
        <NewPost></NewPost>
        <Posts>
          {posts.map((p) => (
            <Post key={p.id}>
              <Photo>
                <img src={user.img} alt="userPhoto" />
              </Photo>
              <PostInfo>
                <h2>{user.name}</h2>
                <p>{p.description}</p>
                <p>{p.link}</p>
              </PostInfo>
            </Post>
          ))}
        </Posts>
      </Feed>
    </>
  );
}

const Feed = styled.div``;
const NewPost = styled.div``;
const Posts = styled.div``;
const Post = styled.div``;
const Photo = styled.img``;
const PostInfo = styled.div``;
