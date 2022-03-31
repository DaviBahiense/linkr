import React, { useState, useEffect } from "react";
import StyledCommentsIcon from "./styles";
import { AiOutlineComment } from "react-icons/ai";
import api from "../../../services/api";

const CommentsIcon = ({ onClick, postId, reload }) => {
  useEffect(() => {
    handleComment();
  }, [reload]);

  const [commentCount, setCommentCount] = useState(null);

  const handleComment = async () => {
    try {
      const data = await api.getComments(postId);

      setCommentCount(data.data.length);
    } catch (error) {
      console.log(error);
      alert("Erro, tente novamente");
    }
  };

  return (
    <div>
      <StyledCommentsIcon>
        <AiOutlineComment onClick={onClick} />
        <p>{commentCount} comments</p>
      </StyledCommentsIcon>
    </div>
  );
};

export default CommentsIcon;
