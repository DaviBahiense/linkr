import styled from "styled-components";
import { Link } from "react-router-dom";
import useUser from "../../../hooks/useUser";

export default function Avatar(user) {
  return (
    <Link to={`/user/${user.id}`}>
      <Logo src={user.avatar} />
    </Link>
  );
}

const Logo = styled.img`
  border-radius: 26.5px;
  object-fit: cover;
  width: "40px";
  height: "40px";
  cursor: pointer;

  @media (min-width: 375px) {
    width: 50px;
    height: 50px;
  }
`;
