import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";
import TopBar from "./TopBar";
import useAuth from "../../hooks/useAuth";
import {
  PostContainer,
  Feed,
} from "./style.js";
import Timeline from "../../components/posts/Timeline";

export default function Home() {
  const { auth } = useAuth();
  const [user, setUser] = useState("");
  const [posts, setPosts] = useState([]);
  const [formData, setFormData] = useState({ link: "", description: "" });
  const [isLoading, setIsLoading] = useState(false);
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
          <h1 className="head">#hashtag</h1>
          <Timeline loadingPosts={loadingPosts} posts={posts} />
        </PostContainer>
      </Feed>
    </>
  );
}