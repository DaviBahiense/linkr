import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../services/api";
import TopBar from "./TopBar";
import useAuth from "../../hooks/useAuth";
import {
  Metainfo,
  LoadContainer,
  Metadata,
  PostContainer,
  Feed,
  Posts,
  Post,
  Photo,
  PostInfo,
  Link,
  Img,
  Hashtag
} from "./style.js";
import { ThreeDots } from "react-loader-spinner";
import ReactHashtag from "react-hashtag";


export default function Home() {
  const { auth } = useAuth();
  const [user, setUser] = useState("");
  const [posts, setPosts] = useState([]);
  const [loadingPosts, setLoadingPosts] = useState(true);
  const { hashtag } = useParams();
  const navigate = useNavigate();

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
      console.log(user);
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

          <Posts>
            {loadingPosts ? (
              <LoadContainer>
                <ThreeDots color="#ffffff" height={100} width={100} />
              </LoadContainer>
            ) : posts.length === 0 ? (
              <h1>There are no posts yet</h1>
            ) : (
              posts.map((p, i) => (
                <Post key={i}>
                  <Photo src={p.img} alt="userPhoto" />

                  <PostInfo>

                    <h2>{p.name}</h2>
                    <h5>
                      <ReactHashtag
                        renderHashtag={(hashtag) => (
                          <Hashtag onClick={() => navigate(`/hashtag/${hashtag.substr(1)}`)}>
                            {hashtag}
                          </Hashtag>
                        )}
                      >
                        {p.description}
                      </ReactHashtag>
                    </h5>

                    <Metadata>
                      <Metainfo>
                        <h4>{p.metadataTitle}</h4>
                        <p>{p.metadataDescription}</p>
                        <Link href={p.link} target="_blank">
                          {p.link}
                        </Link>
                      </Metainfo>
                      <Img src={p.metadataImg}></Img>
                    </Metadata>

                  </PostInfo>
                </Post>
              ))
            )}
          </Posts>
        </PostContainer>
      </Feed>
    </>
  );
}
