import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../services/api";
import TopBar from "../../components/TopBar/TopBar.js";
import useAuth from "../../hooks/useAuth";
import useInterval from "react-useinterval";
import { TailSpin } from "react-loader-spinner";
import { FaSyncAlt } from "react-icons/fa";
import {
  PostContainer,
  Feed,
  NewPost,
  Photo,
  InputUrl,
  Description,
  Button,
  PostContent,
  Main,
  NewCounter,
  LoaderNew,
} from "./style.js";
import Timeline from "../../components/posts/Timeline";
import HashtagBox from "../../components/HashtagBox";

export default function Home() {
  const { auth } = useAuth();
  const [user, setUser] = useState("");
  const [posts, setPosts] = useState([]);
  const [formData, setFormData] = useState({ link: "", description: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [loadingPosts, setLoadingPosts] = useState(true);
  const [newPosts, setNewPosts] = useState(null);
  const [loadingNew, setLoadingNew] = useState(false);
  const [oldPosts, setOldPosts] = useState([]);
  const [loadHashtagBox, setLoadHashtagBox] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth) {
      navigate("/");
      alert("Para a Home, faça primeiro o login");
      return;
    }
    renderPage();
  }, []);

  useInterval(() => {
    newPostsCounter();
  }, 15000);

  function renderPage() {
    renderPosts();
    handleUser();
  }

  function refreshPage() {
    renderPosts();
    setNewPosts(null);
    setLoadingNew(true);
    setLoadingPosts(false);
  }

  async function newPostsCounter() {
    try {
      const { data: postData } = await api.getPosts(auth);

      if (postData.length > oldPosts.length) {
        let number = postData.length - oldPosts.length;

        setNewPosts(number);
      } else if (posts.length >= 20 || postData.length >= 20) {
        let old = posts[posts.length - 1].postId;
        let created = postData[postData.length - 1].postId;
        let info = created - old;
        if (info === 0) {
          setNewPosts(null);
        } else {
          setNewPosts(info);
        }
      }
    } catch (error) {
      console.log(error);
    }
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
    setLoadHashtagBox(!loadHashtagBox)
    renderPosts();
  }

  function handleInputChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function renderPosts() {
    try {
      const { data: postData } = await api.getPosts(auth);
      const { data: oldData } = await api.getPosts(auth);

      setPosts(postData);
      setLoadingPosts(false);
      setLoadingNew(false);
      setOldPosts(oldData);
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
    <Main>
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
          </form>{" "}
          {newPosts !== null ? (
            <NewCounter>
              <h1>{newPosts} new posts, load more!</h1>
              <FaSyncAlt color="white" onClick={() => refreshPage()} />{" "}
            </NewCounter>
          ) : (
            ""
          )}
          <Timeline loadingPosts={loadingPosts} posts={posts} />
          {loadingNew ? (
            <LoaderNew>
              {" "}
              <TailSpin
                color="#6D6D6D;
"
                height={36}
                width={36}
              />
              <h1>"Loading more posts..."</h1>
            </LoaderNew>
          ) : (
            ""
          )}
        </PostContainer>
      </Feed>

      <HashtagBox reload={loadHashtagBox}></HashtagBox>
    </Main>
  );
}
