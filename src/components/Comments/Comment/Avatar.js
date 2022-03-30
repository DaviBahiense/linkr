import styled from "styled-components";
import { Link } from "react-router-dom";
import useUser from "../../../hooks/useUser";

export default function Avatar() {
  const { user } = useUser();

  return (
    <Link to={`/user/${user.Avatarid}`}>
      <Logo src="https://picsum.photos/200" />
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
