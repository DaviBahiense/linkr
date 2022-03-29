import styled from "styled-components";

const Button = styled.button`
    width: 112px;
    height: 31px;
    background-color: ${(props)=>props.follow? "#ffffff" : "#1877F2"};
    color: ${(props)=>props.follow? "#1877F2" : "#ffffff"};
    border: none;
    border-radius: 5px;
    font-size: 14px;
    font-weight: 700;
    ${(props) => props.block && "pointer-events: none;"}
`;

export {
    Button
}