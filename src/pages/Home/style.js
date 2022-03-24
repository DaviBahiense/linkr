import styled from "styled-components";

const Metainfo = styled.div`
  width: 65%;
  height: 100%;

  word-wrap: break-word;
  word-break: break-word;
`;

const LoadContainer = styled.div`
  min-width: 610px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 635px) {
    min-width: 100%;
  }
`;

const Metadata = styled.div`
  height: 155px;
  width: 503px;

  position: relative;
  margin-top: 15px;
  border: 1px solid #4d4d4d;
  border-radius: 11px;
  margin-bottom: 20px;

  @media (max-width: 620px) {
    width: 100%;
    height: 115px;
  }
`;

const PostContainer = styled.div`
  width: 611px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 620px) {
    width: 100%;
  }
`;

const Feed = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #333333;
  width: 100%;

  .head {
    margin-top: 150px;
    margin-bottom: 40px;
    align-self: flex-start;
    font-family: Oswald;
    font-size: 43px;
    font-style: normal;
    font-weight: 700;
    line-height: 64px;
    letter-spacing: 0em;
    text-align: left;
    color: #ffffff;
    @media (max-width: 620px) {
      margin: 0px 17px 17px 17px;
      margin-top: 91px;
    }
  }
  h3 {
    margin-top: 130px;
    font-family: Oswald;
    font-size: 43px;
    font-style: normal;
    font-weight: 700;
    line-height: 64px;
    letter-spacing: 0em;
    text-align: left;
    color: #ffffff;
  }
`;
const NewPost = styled.div`
  background: white;

  height: 209px;
  width: 100%;
  display: flex;
  margin-bottom: 29px;
  border-radius: 16px;
  box-shadow: 0px 4px 4px 0px #00000040;
  @media (max-width: 620px) {
    width: 100vw;
    border-radius: 0px;

    justify-content: center;

    .hidden {
      display: none;
      visibility: hidden;
    }
  }
`;
const Posts = styled.div`
  h1 {
    margin-top: 50px;
    font-family: Oswald;
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: 64px;
    letter-spacing: 0em;
    text-align: left;
    color: #ffffff;
  }
`;
const Post = styled.div`
  height: 100%;
  width: 611px;

  border-radius: 16px;
  background: #171717;
  margin-bottom: 16px;
  display: flex;
  @media (max-width: 620px) {
    width: 100vw;
    border-radius: 0px;
  }
`;
const Photo = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 21px;
  margin-top: 16px;
  margin-left: 18px;
  border-radius: 50%;
`;
const PostInfo = styled.div`
  display: flex;
  flex-direction: column;
  word-wrap: break-word;
  word-break: break-all;
  margin-right: 22px;
  position: relative;

  @media (max-width: 620px) {
    margin-right: 18px;
    width: 100%;
  }

  h5 {
    font-family: Lato;
    font-size: 17px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
    color: #b7b7b7;
    @media (max-width: 620px) {
      font-family: Lato;
      font-size: 15px;
      font-style: normal;
      font-weight: 400;
      line-height: 18px;
      letter-spacing: 0em;
      text-align: left;
    }
  }

  h4 {
    font-family: "Lato";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #cecece;
    margin-bottom: 5px;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-top: 24px;
    margin-left: 19px;

    @media (max-width: 620px) {
      font-size: 11px;
      line-height: 13px;

      margin-top: 15px;
      margin-left: 11px;
    }
  }

  h2 {
    margin-top: 19px;
    font-family: Lato;
    font-size: 19px;
    font-style: normal;
    font-weight: 400;
    line-height: 23px;
    letter-spacing: 0em;
    text-align: left;
    color: #ffffff;
    margin-bottom: 7px;
    overflow: hidden;
    text-overflow: ellipsis;
    @media (max-width: 620px) {
      font-size: 11px;
      line-height: 13px;
      margin-bottom: 4px;
    }
  }
  p {
    font-family: "Lato";
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 13px;
    margin-bottom: 13px;
    color: #9b9595;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-left: 19px;
    @media (max-width: 620px) {
      font-size: 9px;
      line-height: 11px;
      margin-bottom: 4px;
      margin-left: 11px;
    }
  }
`;
const InputUrl = styled.input`
  border: none;
  height: 30px;
  width: 503px;
  left: 501px;
  top: 313px;
  border-radius: 5px;
  background: #efefef;
  font-family: Lato;
  font-size: 15px;
  font-style: normal;
  font-weight: 300;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: 5px;
  margin-right: 22px;
  &::placeholder {
    color: #949494;
    font-size: 15px;
    font-weight: 300;
  }
  &:disabled {
    opacity: 0.5;
  }
  @media (max-width: 620px) {
    width: 100%;
    margin-right: 0px;
  }
`;
const Description = styled.textarea`
  border: none;
  height: 66px;
  width: 502px;
  border-radius: 5px;
  background: #efefef;
  font-family: Lato;
  font-size: 15px;
  font-style: normal;
  font-weight: 300;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
  color: #949494;
  margin-bottom: 5px;
  border-radius: 5px;
  background-color: #efefef;
  height: 66px;
  line-height: 18px;
  margin-bottom: 5px;
  padding-top: 8px;
  padding-left: 12px;
  resize: none;
  outline: none;
  border: none;
  &::placeholder {
    color: #949494;
    font-size: 15px;
    font-weight: 300;
  }
  &:disabled {
    opacity: 0.5;
  }

  &:disabled {
    opacity: 0.5;
  }
  @media (max-width: 620px) {
    width: 100%;
  }
`;
const Button = styled.button`
  align-self: flex-end;
  margin-right: 22px;
  border: none;
  height: 31px;
  width: 112px;
  left: 892px;
  top: 419px;
  border-radius: 5px;
  background: #1877f2;
  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 17px;
  letter-spacing: 0em;
  text-align: center;
  color: #ffffff;

  @media (max-width: 620px) {
    margin-right: 0px;
  }
`;

const PostContent = styled.div`
  display: flex;
  flex-direction: column;
  h1 {
    margin-top: 21px;
    margin-bottom: 15px;
    border-radius: nullpx;
    font-family: Lato;
    font-size: 20px;
    font-style: normal;
    font-weight: 300;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
    color: #707070;
  }
  @media (max-width: 620px) {
    width: 100vw;
    align-items: center;
    margin-right: 15px;
    margin-left: 15px;
  }
`;

const Link = styled.a`
  all: unset;
  font-family: "Lato";
  font-style: normal;
  color: #cecece;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 11px;
  font-weight: 400;
  line-height: 13px;
  cursor: pointer;
  margin-left: 19px;
  &:hover {
    text-decoration: underline;
  }
  @media (max-width: 620px) {
    font-size: 9px;
    line-height: 11px;
    margin-left: 11px;
  }
`;
const Img = styled.img`
  object-fit: cover;
  height: 100%;
  width: 154px;
  border-radius: 0 12px 13px 0;
  position: absolute;
  right: 0;
  top: 0px;
`;

export {
  Metainfo,
  LoadContainer,
  Metadata,
  PostContainer,
  Feed,
  NewPost,
  Posts,
  Post,
  Photo,
  PostInfo,
  InputUrl,
  Description,
  Button,
  PostContent,
  Link,
  Img,
};
