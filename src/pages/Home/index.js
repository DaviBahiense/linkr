import { useEffect, useState } from "react";
import api from "../../services/api";
import TopBar from "./TopBar";
import useAuth from "../../hooks/useAuth";
import styled from "styled-components";

export default function Home() {
  const { auth } = useAuth();
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [formData, setFormData] = useState({ url: "", description: "" });
  const [isLoading, setIsLoading] = useState(false);

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

  async function handleSubmit(e) {
    e.preventDefault();

    if (!formData.url) {
      return;
    }
    setIsLoading(true);

    try {
      await api.sendPost(formData, auth);
      setFormData({ url: "", description: "" });
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  }

  function handleInputChange({ selected }) {
    setFormData({ ...formData, [selected.name]: selected.value });
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
        <form onSubmit={handleSubmit}>
          <Photo>
            <img src={user.img} alt="userPhoto" />
          </Photo>
          <NewPost>
            <h1>What are you going to share today?</h1>
            <InputUrl
              type="url"
              name="url"
              value={formData.url}
              placeholder="http://..."
              onChange={handleInputChange}
              disabled={isLoading}
              required
            />
            <InputDescription
              name="description"
              value={formData.description}
              placeholder="Awesome article about #javascript"
              onChange={handleInputChange}
              disabled={isLoading}
            />
            <Button disabled={isLoading}>
              {isLoading ? "Publishing..." : "Publish"}
            </Button>
          </NewPost>
        </form>
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
const InputUrl = styled.input``;
const InputDescription = styled.input``;
const Button = styled.button``;
