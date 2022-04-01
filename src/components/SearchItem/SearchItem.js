import { useNavigate } from "react-router-dom";
import styled from "styled-components";


export default function SearchItem({ id, name, img, follows, setSearchText, searchText }) {
  const navigate = useNavigate()

  return (
    <Container onClick={() => { navigate(`/user/${id}`) }}>
      <img src={img} alt="user" />
      <p>{name}</p>
      {follows &&
        <div className="following">
          <div className="circle"></div>
          <span>following</span>
        </div>
      }
    </Container>
  );
}

const Container = styled.span`
    background-color: #E7E7E7;
    width: 100%;
    padding: 18px 18px 0 18px;

    display: flex;
    align-items: center;

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

    div.following {
      display: flex;
      align-items: center;
    }

    div.circle{
      width: 7px;
      height: 7px;
      background-color: #C5C5C5;
      border-radius: 3.5px;
      margin-left: 10px;
      margin-right: 3px;
    }

    span{
      font-family: 'Lato';
      font-style: normal;
      font-weight: 400;
      font-size: 17px;
      line-height: 23px;
      color: #C5C5C5;
}
`;