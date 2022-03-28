import Post from "../../pages/Home/Post";
import { LoadContainer, Posts } from "../../pages/Home/style";
import { ThreeDots } from "react-loader-spinner";

export default function Timeline({ loadingPosts, posts }) {
    return (
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
    );
}