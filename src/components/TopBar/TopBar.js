import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import SearchBox from "../SearchBox/SearchBox";
import { Link } from "react-router-dom";

export default function TopBar(user) {
  const [selected, setSelected] = useState(false);
  const navigate = useNavigate();
  const { logOut } = useAuth();

  function menu() {
    if (selected === false) {
      setSelected(true);
    } else {
      setSelected(false);
    }
  }
  function singOut() {
    logOut();
    navigate("/");
  }

  return (
    <Cont>
      <Box>
        <Link to="/home">
          <h1>linkr</h1>
        </Link>

        <SearchBox type={"header"}></SearchBox>

        <User>
          {selected ? (
            <BiChevronUp onClick={() => menu()} size="3em" color="white" />
          ) : (
            <BiChevronDown onClick={() => menu()} size="3em" color="white" />
          )}
          <img src={user.img} alt="userPhoto" />
        </User>
      </Box>
      <Hide selected={selected}>
        <Logout onClick={() => singOut()}>
          <p>Logout</p>
        </Logout>
      </Hide>
    </Cont>
  );
}
const Cont = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  z-index: 3;
`;
const Hide = styled.div`
  display: ${(props) => (props.selected ? "flex" : "none")};
  width: 100vw;
  height: 40px;
  justify-content: flex-end;
  position: relative;
  top: 0px;
  z-index: 4;
`;
const Logout = styled.div`
  width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #171717;
  border-radius: 0px 0px 0px 20px;

  p {
    font-family: Lato;
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: 18px;
    letter-spacing: 0.05em;
    text-align: left;
    color: #ffffff;
  }
`;
const Box = styled.div`
  width: 100%;
  height: 72px;
  background-color: #151515;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1 {
    margin-left: 21px;
    font-family: Passion One;
    font-size: 49px;
    font-style: normal;
    font-weight: 700;
    line-height: 54px;
    letter-spacing: 0.05em;
    text-align: left;
    color: #ffffff;
  }
  @media (max-width: 414px) {
    h1 {
      font-size: 45px;
    }
  }
`;
const User = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 53px;
    height: 53px;
    margin-right: 21px;
    border-radius: 50%;
  }
  .react-icons {
    width: 40px;
    height: 40px;
    font-size: 40px;
    color: #ffffff;
  }
  @media (max-width: 414px) {
    img {
      margin-right: 14px;
    }
    .icon {
      font-size: 15px;
    }
  }
`;
