import { TiPencil } from "react-icons/ti";
import { useEffect, useState } from "react";
import { RiDeleteBin7Fill as Bin } from "react-icons/ri";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import Modal from "react-modal";
import styled from "styled-components";
import { ThreeDots } from "react-loader-spinner";
import {
  Metainfo,
  Metadata,
  Post as PostWrapper,
  Photo,
  PostInfo,
  EditDescription,
  Link,
  Img,
  UserPostInterac,
} from "./style";

export default function Post(p) {
  const [edit, setEdit] = useState(false);
  const [user, setUser] = useState("");
  const [modal, setModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { auth } = useAuth();
  const navigate = useNavigate();

  const { register, handleSubmit, watch } = useForm();
  const description = watch("updateDescription", true);

  useEffect(() => {
    handleUser();
    const listener = (event) => {
      if (event.code === "Escape") {
        event.preventDefault();
        setEdit(false);
      }
    };
    document.addEventListener("keydown", listener);
    setIsLoading(false);
  }, []);

  Modal.setAppElement(document.getElementById("root"));

  async function handleUser() {
    try {
      const { data: userData } = await api.getUser(auth);
      setUser(userData);
    } catch (error) {
      console.log(error);
      alert("Erro, tente novamente");
    }
  }

  const enterEdit = (e) => {
    if (e.key === "Enter" && e.shiftKey === false) {
      const data = { content: e.target.value };
      return handleSubmit(EditSubmit(data));
    }
  };

  async function EditSubmit(data) {
    const body = { postId: p.postId, description: data.content };
    try {
      await api.editPost(body, auth);

      setEdit(false);
      //document.location.reload(true);
    } catch (error) {
      console.log(error);
      setEdit(true);
      alert("Erro, tente novamente");
    }
  }

  function openModal() {
    setModal(true);
  }

  function closeModal() {
    setModal(false);
  }

  function cancelDelete() {
    setModal(false);
    navigate("/home");
  }

  async function handleDeletePost(id) {
    console.log(id);
    setModal(false);
    setIsLoading(true);
    try {
      await api.deletePost(id, auth);
      setIsLoading(false);
    } catch (error) {
      alert("Erro ao deletar o post");
    }
  }

  return (
    <PostWrapper>
      <Photo src={p.img} alt="userPhoto" />

      <PostInfo>
        <UserPostInterac>
          <h2>{p.name}</h2>
          <Modal
            isOpen={modal}
            onRequestClose={closeModal}
            style={customStyles}
          >
            <h1>
              Are you sure you want
              <br /> to delete this post?{" "}
            </h1>
            <Form>
              <Confirm onClick={() => cancelDelete()}>no, go back</Confirm>
              <Delete
                onClick={() => handleDeletePost(p.postId)}
                disabled={isLoading}
              >
                {isLoading ? (
                  <ThreeDots color="#ffffff" height={30} width={30} />
                ) : (
                  "yes, delete it"
                )}
              </Delete>
            </Form>
          </Modal>
          <div>
            <TiPencil
              style={{ color: "white", marginRight: "10px" }}
              onClick={
                user.id === p.userId
                  ? () => (edit ? setEdit(false) : setEdit(true))
                  : null
              }
            />
            <Bin color="white" onClick={() => openModal()} />
          </div>
        </UserPostInterac>
        {edit ? (
          <EditDescription
            {...register("updateDescription")}
            onSubmit={handleSubmit(EditSubmit)}
            defaultValue={p.description}
            type="text"
            onKeyPress={enterEdit}
            name="updateDescription"
            autoFocus
          />
        ) : (
          <h5>{description || p.description}</h5>
        )}
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
    </PostWrapper>
  );
}

const customStyles = {
  content: {
    width: "597px",
    height: "262px",
    fontSize: "34px",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    backgroundColor: "#333333",
    borderRadius: "50px",
    marginRight: "-50%",
    transform: "translate(-50%,-50%)",
    color: "#FFFFFF",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
  },
};

const Form = styled.form`
  width: 300px;
  height: 37px;
  display: flex;
  justify-content: space-between;
`;
const Confirm = styled.button`
  width: 134px;
  height: 37px;
  border: none;
  font-size: 18px;
  font-weight: bold;
  color: #1877f2;
  background: #ffffff;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Delete = styled.button`
  width: 134px;
  height: 37px;
  border: none;
  font-size: 18px;
  font-weight: bold;
  color: #1877f2;
  background: #ffffff;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
