import { Link } from "react-router-dom";
import styled from "styled-components";

const ContainerRepost = styled.div`
    background-color: #1e1e1e;
    border-radius: 16px;
    margin-bottom: 40px;
    @media (max-width: 620px){
        border: none;
    }
`;

const InfoRepost= styled.div`
    display: flex;
    gap: 0 6px;
    align-items: center;
    border-radius: 16px;
    padding: 10px 13px;

    p{
        font-size: 11px;
        line-height:13.2px;
        color: #ffffff;
    }
`

const LinkSpan = styled(Link)`
    text-decoration: none;
    font-weight: 700;
    color: #ffffff;
`

export{
    ContainerRepost,
    InfoRepost,
    LinkSpan
}