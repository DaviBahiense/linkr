import styled from "styled-components";

const Title = styled.div`
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
    display: flex;
    align-items: center;

    @media (max-width: 620px) {
        margin: 0px 17px 17px 17px;
        margin-top: 91px;
    }

    img{
        width: 50px;
        height: 50px;
        margin: 0 18px;
        border-radius: 50%;
    }
`;

export {
    Title
}