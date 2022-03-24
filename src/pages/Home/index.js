import { useEffect, useState } from "react";
import api from "../../services/api";
import TopBar from "./TopBar";
import useAuth from "../../hooks/useAuth";
import styled from "styled-components";

export default function Home() {
  const { auth } = useAuth();
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [formData, setFormData] = useState({ link: "", description: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

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

    if (!formData.link) {
      return;
    }
    setIsLoading(true);

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

  function handleInputChange({ selected }) {
    setFormData({ ...formData, [selected.name]: selected.value });
  }

  async function renderPosts() {
    try {
      const { data } = await api.getPosts();
      setPosts(data);
    } catch (error) {
      console.log(error);
      alert(
        "An error occured while trying to fetch the posts, please refresh the page"
      );
    }
  }

  return (
    <>
      <Feed>
        <TopBar {...user} />

        <h1>timeline</h1>
        <form onSubmit={handleSubmit}>
          <NewPost>
            <Photo src={user.img} alt="userPhoto" />

            <PostContent>
              <h1>What are you going to share today?</h1>
              <InputUrl
                type="url"
                name="url"
                value={formData.link}
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
            </PostContent>
          </NewPost>
        </form>
        <Posts>
          {posts.length === 0 ? (
            <h1>There are no posts yet</h1>
          ) : (
            posts.map((p, i) => (
              <Post key={i}>
                <Photo src={p.img} alt="userPhoto" />

                <PostInfo>
                  <h2>{p.name}</h2>
                  <p>{p.metadataTitle}</p>
                  <p>{p.metadataDescription}</p>
                  <Link href={p.link}>{p.link}</Link>
                  <Img src={p.metadataImg}></Img>
                </PostInfo>
              </Post>
            ))
          )}
        </Posts>
      </Feed>
    </>
  );
}

const Feed = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #333333;
  width: 100%;
  h3 {
    margin-top: 130px;
    font-family: Oswald;
    font-size: 43px;
    font-style: normal;
    font-weight: 700;
    line-height: 64px;
    letter-spacing: 0em;
    text-align: left;
    color: #ffffff;
  }
`;
const NewPost = styled.div`
  background: white;
  height: 209px;
  width: 611px;
  display: flex;
  margin-bottom: 29px;
  border-radius: 16px;
  box-shadow: 0px 4px 4px 0px #00000040;
`;
const Posts = styled.div``;
const Post = styled.div`
  height: 100%;
  width: 611px;

  border-radius: 16px;
  background: #171717;
  margin-bottom: 16px;
  display: flex;
`;
const Photo = styled.img`
  width: 53px;
  height: 53px;
  margin-right: 21px;
  margin-top: 16px;
  margin-left: 18px;
  border-radius: 50%;
`;
const PostInfo = styled.div`
  display: flex;
  flex-direction: column;
  word-wrap: break-word;
  word-break: break-all;
  margin-right: 22px;
  position: relative;

  h2 {
    font-family: Lato;
    font-size: 19px;
    font-style: normal;
    font-weight: 400;
    line-height: 23px;
    letter-spacing: 0em;
    text-align: left;
    color: #ffffff;
    margin-bottom: 7px;
  }
  p {
    font-family: Lato;
    font-size: 17px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
    color: #b7b7b7;
  }
`;
const InputUrl = styled.input`
  border: none;
  height: 30px;
  width: 503px;
  left: 501px;
  top: 313px;
  border-radius: 5px;
  background: #efefef;
  font-family: Lato;
  font-size: 15px;
  font-style: normal;
  font-weight: 300;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: 5px;
`;
const InputDescription = styled.input`
  border: none;
  height: 66px;
  width: 502px;
  border-radius: 5px;
  background: #efefef;
  font-family: Lato;
  font-size: 15px;
  font-style: normal;
  font-weight: 300;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
  color: #949494;
  margin-bottom: 5px;
`;
const Button = styled.button`
  border: none;
  height: 31px;
  width: 112px;
  left: 892px;
  top: 419px;
  border-radius: 5px;
  background: #1877f2;
  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 17px;
  letter-spacing: 0em;
  text-align: center;
  color: #ffffff;
`;

const PostContent = styled.div`
  display: flex;
  flex-direction: column;
  h1 {
    border-radius: nullpx;
    font-family: Lato;
    font-size: 20px;
    font-style: normal;
    font-weight: 300;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
    color: #707070;
  }
`;

const Link = styled.a`
  all: unset;
  font-size: 11px;
  font-weight: 400;
  line-height: 13px;
  cursor: pointer;
`;
const Img = styled.img`
  object-fit: cover;
  height: 100%;
  width: 154px;
  border-radius: 0 12px 13px 0;
  position: absolute;
  right: 0;
  top: 0px;
`;
