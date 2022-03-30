import React, { useState } from "react";
import StyledCommentsIcon from "./styles";
import { AiOutlineComment } from "react-icons/ai";

const CommentsIcon = ({ onClick }) => {
  let commentCount = 1;
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
