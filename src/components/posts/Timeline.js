import Post from "../../pages/Home/Post";
import { LoadContainer, Posts } from "../../pages/Home/style";
import { ThreeDots } from "react-loader-spinner";
import Repost from "../Repost/Repost";

export default function Timeline({ loadingPosts, posts, reload }) {
  return (
    <>
      <Posts>
        {loadingPosts ? (
          <LoadContainer>
            <ThreeDots color="#ffffff" height={100} width={100} />
          </LoadContainer>
        ) : posts.length === 0 ? (
          <h1>There are no posts yet</h1>
        ) : (
          posts.map((p, i) => p.reposterByName !== null ? <Repost {...p} key={i} /> : <Post {...p} key={i} reload={reload} />)
        )}
      </Posts>
    </>
  );
}