import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";

export default function HashtagBox({ reload, reloadPosts }) {
  const { auth } = useAuth();
  const [tags, setTags] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getTags();
  }, [reload]);

  async function getTags() {
    try {
      const tagsList = await api.getTrendingTags(auth);
      console.log(tagsList.data);
      setTags(tagsList.data);
    } catch (error) {
      console.log(error.response);
    }
  }

  return (
    <Box>
      <div className="trending">
        <span>trending</span>
      </div>
      <div className="border"></div>
      <div className="tags">
        {tags.length > 0
          ? tags.map(({ tag }) => (
            <StyledLink onClick={() => {
              reloadPosts()
              navigate(`/hashtag/${tag}`)
            }}># {tag}
            </StyledLink>
          ))
          : ""}
      </div>
    </Box>
  );
}

const Box = styled.div`
  display: flex;
  flex-direction: column;

  background-color: #171717;
  border-radius: 16px;

  width: 301px;
  height: 406px;

  position: sticky;
  top: 255px;
  right: calc(50vw - (611px/1.3));

  @media (max-width: 835px) {
    display: none;
  }

  div.trending {
    display: flex;
    height: 61px;

    color: #ffffff;

    span {
      margin-left: 16px;
      margin-top: 9px;

      font-weight: 700;
      font-size: 27px;
      line-height: 40px;
      text-align: center;
      text-overflow: ellipsis;
    }
  }

  div.border {
    border: 1px solid #484848;
  }

  div.tags {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    margin-top: 20px;
    margin-left: 16px;
    gap: 3px;
  }
`;

const StyledLink = styled.span`
  text-decoration: none;
  font-size: 19px;
  line-height: 23px;
  letter-spacing: 0.05em;

  color: #ffffff;
`;
