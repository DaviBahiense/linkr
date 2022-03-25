import { TiPencil } from "react-icons/ti";
import { useEffect, useState } from "react";

import { RiDeleteBin7Fill as Bin } from "react-icons/ri";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import api from "../../services/api";
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
  const { auth } = useAuth();

  const { register, handleSubmit } = useForm();

  useEffect(() => {
    const listener = (event) => {
      if (event.code === "Escape") {
        event.preventDefault();
        setEdit(false);
      }
    };
    document.addEventListener("keydown", listener);
  }, []);

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
      document.location.reload(true);
    } catch (error) {
      console.log(error);
      setEdit(true);
      alert("Erro, tente novamente");
    }
  }

  return (
    <PostWrapper>
      <Photo src={p.img} alt="userPhoto" />

      <PostInfo>
        <UserPostInterac>
          <h2>{p.name}</h2>
          <div>
            <TiPencil
              style={{ color: "white", marginRight: "10px" }}
              onClick={() => (edit ? setEdit(false) : setEdit(true))}
            />
            <Bin color="white" />
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
          <h5>{p.description}</h5>
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
