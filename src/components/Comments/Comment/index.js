import React, { useContext, useEffect, useState } from "react";
import Avatar from "./Avatar";
import Container from "./Container";
import Message from "./Message";
import useUser from "../../../hooks/useUser";
import api from "../../../services/api";
import useAuth from "../../../hooks/useAuth";

const Comment = ({ text, commenter, pic, name, postOwner }) => {
  const { user } = useUser();
  const [follows, setFollows] = useState([]);
  const { auth } = useAuth();

  useEffect(() => {
    api.getUserFollow(auth).then((res) => {
      setFollows(res.data.map((u) => u.followId));
    });
  }, []);
  return (
    <>
      <Container horizontal margin="16px">
        <Avatar avatar={pic} width="35px" id={commenter} />

        <Container margin="0 18px" height="35px" align="start">
          <div>
            <Message text={name} color="#f3f3f3" size="14px" />
            {commenter === postOwner ? (
              <Message text=" • post’s author" color="#565656" size="14px" />
            ) : follows.includes(commenter) ? (
              <Message text=" • following" color="#565656" size="14px" />
            ) : null}
          </div>
          <Message text={text} color="#acacac" size="14px" />
        </Container>
      </Container>
      <div
        style={{
          marginLeft: "30px",
          height: 1,
          width: "100%",
          backgroundColor: "#353535",
        }}
      ></div>
    </>
  );
};

export default Comment;
