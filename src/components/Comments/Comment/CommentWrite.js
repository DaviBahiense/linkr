import React, { useState } from "react";
import useUser from "../../../hooks/useUser";
import Avatar from "./Avatar";
import Container from "./Container";
import Button from "./Button";
import Form from "./Form";
import Input from "./Input";
import { FiSend } from "react-icons/fi";
import api from "../../../services/api";

const CommentWrite = ({ postId, setReload, reload }) => {
  const { user } = useUser();
  const [comment, setComment] = useState("");
  const [disabled, setDisabled] = useState(false);

  const handleComment = (e) => {
    e.preventDefault();
    setDisabled(true);
    const body = {
      userId: user.id,
      postId: postId,
      comment: comment,
    };

    try {
      api.createComment(body);
      setComment("");
      setReload(!reload);
    } catch (error) {
      console.log(error);
      alert("Erro ao criar commentario");
    }
    setDisabled(false);
  };

  return (
    <Container horizontal margin="20px 0">
      <Avatar id={user.id} avatar={user.img} width="35px" />
      <div style={{ width: 15 }}></div>
      <Form width="100%" disabled={disabled} onSubmit={handleComment}>
        <Input
          outline="none"
          height={50}
          fColor="#acacac"
          pColor="#575757"
          text="write a comment..."
          color="#252525"
          required
          border="none"
          fSize="14px"
          data={{ value: comment, setValue: setComment }}
        />

        <Button type="submit" width={20} height={20} color="transparent">
          <FiSend />
        </Button>
      </Form>
    </Container>
  );
};

export default CommentWrite;
