import styled from "styled-components";

const StyledLike = styled.div`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px 0;

    .icons{
        width: 20px;
        height: 20px;
        ${(props) => props.block && "pointer-events: none;"}
    }

    a{
        font-size: 11px;
        line-height:13.2px;
        color: #ffffff;
    }
`;

export {
    StyledLike
}