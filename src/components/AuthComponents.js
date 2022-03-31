import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  justify-content: center;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
const Welcome = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #151515;
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 600px) {
    height: 175px;
  }

  div {
    margin-left: 144px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    @media (max-width: 600px) {
      margin-left: 0px;
      align-items: center;
    }
  }

  h1 {
    font-family: Passion One;
    font-size: 106px;
    font-style: normal;
    font-weight: 700;
    line-height: 117px;
    letter-spacing: 0.05em;
    text-align: left;
    color: #ffffff;
    @media (max-width: 600px) {
      margin-bottom: -10px;
      font-size: 76px;
      line-height: 84px;
    }
  }
  h2 {
    font-family: Oswald;
    font-size: 43px;
    font-style: normal;
    font-weight: 700;
    line-height: 64px;
    letter-spacing: 0em;
    text-align: left;
    color: #ffffff;
    @media (max-width: 600px) {
      font-size: 23px;
      line-height: 34px;
    }
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 0px 51px 0px 51px;

  p {
    color: whitesmoke;
  }
  @media (max-width: 600px) {
    margin-top: 40px;
  }
`;

const Input = styled.input`
  width: 429px;
  height: 65px;
  margin: 6px 0px 6px;
  padding: 15px;
  border: 1px solid #d5d5d5;
  border-radius: 6px;

  color: black;
  font-size: 27px;
  line-height: 40px;
  font-family: Oswald;

  @media (max-width: 600px) {
    width: 330px;
    height: 55px;
    font-size: 22px;
    line-height: 32px;
  }
`;

const Button = styled.button`
  width: 429px;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 5px;
  margin-top: 6px;

  cursor: pointer;

  font-size: 27px;
  line-height: 40px;
  font-weight: 700;
  text-align: center;
  font-family: Oswald;

  background: #1877f2;
  color: #fff;

  @media (max-width: 600px) {
    width: 330px;
    height: 55px;
    font-size: 22px;
    line-height: 32px;
  }
`;

const StyledLink = styled(Link)`
  margin-top: 22px;
  font-size: 20px;
  line-height: 24px;
  font-weight: bold;
  color: #ffffff;
  font-family: Lato;
  text-decoration-line: underline;

  @media (max-width: 600px) {
    font-size: 17px;
    line-height: 20px;
  }
`;

export { Container, Welcome, Form, Input, Button, StyledLink };
