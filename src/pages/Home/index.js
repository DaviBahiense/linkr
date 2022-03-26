import { useEffect, useState } from "react";
import api from "../../services/api";
import TopBar from "./TopBar";
import useAuth from "../../hooks/useAuth";
import {
  LoadContainer,
  PostContainer,
  Feed,
  NewPost,
  Posts,
  Photo,
  InputUrl,
  Description,
  Button,
  PostContent,
} from "./style.js";
import { ThreeDots } from "react-loader-spinner";
import Post from "./Post";

export default function Home() {
  const { auth } = useAuth();
  const [user, setUser] = useState("");
  const [posts, setPosts] = useState([]);
  const [formData, setFormData] = useState({ link: "", description: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [loadingPosts, setLoadingPosts] = useState(true);

  useEffect(() => {
    renderPage();
  }, []);

  function renderPage() {
    renderPosts();
    handleUser();
  }

  async function handleUser() {
    try {
      const { data: userData } = await api.getUser(auth);
      setUser(userData);
    } catch (error) {
      console.log(error);
      alert("Erro, tente novamente");
    }
  }

  async function handleSubmitPost(e) {
    e.preventDefault();

    if (!formData.link) {
      return;
    }
    setIsLoading(true);
    setLoadingPosts(true);

    try {
      await api.sendPost(formData, auth);
      setFormData({ link: "", description: "" });
    } catch (error) {
      console.log(error);
      alert("Houve um erro ao publicar seu link");
    }
    setIsLoading(false);
    renderPosts();
  }

  function handleInputChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function renderPosts() {
    try {
      const { data: postData } = await api.getPosts(auth);

      setPosts(postData);
      setLoadingPosts(false);
    } catch (error) {
      console.log(error);
      if (posts.length !== 0) {
        alert(
          "An error occured while trying to fetch the posts, please refresh the page"
        );
      }
    }
  }

  return (
    <>
      <TopBar {...user} />
      <Feed>
        <PostContainer>
          <h1 className="head">timeline</h1>
          <form onSubmit={handleSubmitPost}>
            <NewPost>
              <Photo className="hidden" src={user.img} alt="userPhoto" />

              <PostContent>
                <h1>What are you going to share today?</h1>
                <InputUrl
                  type="text"
                  name="link"
                  value={formData.link}
                  placeholder="    http://..."
                  onChange={handleInputChange}
                  disabled={isLoading}
                  required
                />
                <Description
                  type="textarea"
                  name="description"
                  value={formData.description}
                  placeholder="Awesome article about #javascript"
                  onChange={handleInputChange}
                  disabled={isLoading}
                />
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? "Publishing..." : "Publish"}
                </Button>
              </PostContent>
            </NewPost>
          </form>
          <Posts>
            {loadingPosts ? (
              <LoadContainer>
                <ThreeDots color="#ffffff" height={100} width={100} />
              </LoadContainer>
            ) : posts.length === 0 ? (
              <h1>There are no posts yet</h1>
            ) : (
              posts.map((p, i) => <Post {...p} key={i} />)
            )}
          </Posts>
        </PostContainer>
      </Feed>
    </>
  );
}
