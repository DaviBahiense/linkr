import styled from "styled-components";

const Title = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items:center;
    margin-top: 150px;
    margin-bottom: 40px;

    @media (max-width: 620px) {
        margin: 150px 17px 17px 17px;
    }

    img{
        width: 50px;
        height: 50px;
        margin: 0 18px;
        border-radius: 50%;
    }

    div{
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
    }
`;

export {
    Title
}