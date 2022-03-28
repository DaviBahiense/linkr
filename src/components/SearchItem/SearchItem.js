import styled from "styled-components";
import { Link } from "react-router-dom";

export default function SearchItem({
  id,
  name,
  img,
}) {

  return (
    <Container to={`/user/${id}`}>
      <img src={img} alt="user" />
      <p>{name}</p>
    </Container>
  );
}

const Container = styled(Link)`
    background-color: #E7E7E7;
    width: 100%;
    padding: 18px 18px 0 18px;

    display: flex;

    :last-child{
        padding-bottom: 20px;
        border-end-end-radius: 8px;
        border-end-start-radius: 8px;
    }
    img{
        object-fit: cover;
        width: 39px;
        height: 39px;
        border-radius: 50%;
    }
    p{
        font-weight: 400;
        font-size: 19px;
        line-height: 23px;
        color: #515151;
        margin-left: 12px;
    }
`;