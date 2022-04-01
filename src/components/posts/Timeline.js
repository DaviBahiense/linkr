import Post from "../../pages/Home/Post";
import { LoadContainer, Posts, LoaderNew } from "../../pages/Home/style.js";
import { ThreeDots } from "react-loader-spinner";
import api from "../../services/api";
import useAuth from "../../hooks/useAuth";
import { useEffect, useState, useRef } from "react";
import { set } from "react-hook-form";
import { TailSpin } from "react-loader-spinner";

export default function Timeline({ loadingPosts, posts }) {
  const [scrollRadio, setScrollRadio] = useState(null);
  const scrollObserve = useRef();
  let hasMorePosts = true;
  const { auth } = useAuth();
  const [loadingNew, setLoadingNew] = useState(false);

  const [post, setPosts] = useState(posts);
  const [isLoading, setIsLoading] = useState(loadingPosts);

  const intersectionObserve = new IntersectionObserver((entries) => {
    const radio = entries[0].intersectionRatio;
    setScrollRadio(radio);
  });

  useEffect(() => {
    intersectionObserve.observe(scrollObserve.current);

    return () => {
      intersectionObserve.disconnect();
    };
  }, []);

  const lastIndex = () => {
    const lastItem = post.length;
    return lastItem;
  };

  useEffect(() => {
    if (scrollRadio > 0 && hasMorePosts) {
      setLoadingNew(true);
      api.getPosts(auth, lastIndex()).then((res) => {
        const newPosts = [...post, ...res.data];
        console.log(res);
        setPosts(newPosts);
        setIsLoading(false);
        setLoadingNew(false);
        hasMorePosts = res.data.hasMore;
      });
    }
  }, [scrollRadio]);

  return (
    <Posts>
      {isLoading ? (
        <LoadContainer>
          <ThreeDots color="#ffffff" height={100} width={100} />
        </LoadContainer>
      ) : post.length === 0 ? (
        <h1>There are no posts yet</h1>
      ) : (
        post.map((p, i) => <Post {...p} key={i} />)
      )}

      <div ref={scrollObserve}>
        {loadingNew && post.length !== 0 ? (
          <LoaderNew>
            {" "}
            <TailSpin color="#6D6D6D;" height={36} width={36} />
            <h6>Loading more posts...</h6>
          </LoaderNew>
        ) : (
          ""
        )}
      </div>
    </Posts>
  );
}
