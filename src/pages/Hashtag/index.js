import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";
import TopBar from "../../components/TopBar/TopBar.js";
import useAuth from "../../hooks/useAuth";
import {
  PostContainer,
  Feed,
  Main
} from "./style.js";
import Timeline from "../../components/posts/Timeline";
import HashtagBox from "../../components/HashtagBox";

export default function Home() {
  const { auth } = useAuth();
  const [user, setUser] = useState("");
  const [posts, setPosts] = useState([]);
  const [loadingPosts, setLoadingPosts] = useState(true);
  const { hashtag } = useParams();

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

  async function renderPosts() {
    try {
      const { data: postData } = await api.getPostsFromATag(auth, hashtag);

      setPosts(postData);
      setLoadingPosts(false);
    } catch (error) {
      console.log("error");
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
          <h1 className="head">#hashtag</h1>
          <Timeline loadingPosts={loadingPosts} posts={posts} reload={renderPosts} />
        </PostContainer>
      </Feed>

      <HashtagBox reloadPosts={renderPosts}></HashtagBox>
    </Main>
  );
}