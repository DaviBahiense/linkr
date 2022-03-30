import React, { useEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import Container from "./Comment/Container";
import Comment from "./Comment";
import CommentWrite from "./Comment/CommentWrite";
import useUser from "../../hooks/useUser";
import api from "../../services/api";

const Comments = ({ postId, clicked }) => {
  const [comments, setComments] = useState(null);
  const { user } = useUser();
  useEffect(() => {
    handleComment();
  }, []);

  const handleComment = async () => {
    try {
      const data = await api.getComments(postId);

      setComments(data.data);
    } catch (error) {
      console.log(error);
      alert("Erro, tente novamente");
    }
  };

  return (
    <>
      <Container>
        {comments === null ? (
          <ThreeDots type="ThreeDots" color="#00BFFF" height={50} width={50} />
        ) : comments[0] ? (
          comments.map((c, i) => (
            <Comment
              text={c.comment}
              pic={c.img}
              commenter={c.userId}
              name={c.name}
              key={i}
            />
          ))
        ) : (
          <span text="Ainda não há comentários" color="white" />
        )}
        <CommentWrite postId={postId} />
      </Container>
    </>
  );
};

export default Comments;
