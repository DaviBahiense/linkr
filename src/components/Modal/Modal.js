import Modal from "react-modal";
import styled from "styled-components";
import { ThreeDots } from "react-loader-spinner";

export default function ConfirmModal({id, setModal, modal, handleFunction, isLoading}){
    Modal.setAppElement(document.getElementById("root"));
    return (
        <Modal isOpen={modal} onRequestClose={()=> setModal(false)} style={customStyles}>
            <h1>
            Are you sure you want
            <br /> to delete this post?{" "}
            </h1>
            <Form>
                <Confirm onClick={() => setModal(false)}>no, go back</Confirm>
                <Delete
                    onClick={() => handleFunction(id)}
                    disabled={isLoading}
                >
                    {isLoading ? (
                    <ThreeDots color="#ffffff" height={30} width={30} />
                    ) : (
                    "yes, delete it"
                    )}
                </Delete>
            </Form>
        </Modal>
    );
}

const customStyles = {
    content: {
        width: "597px",
        height: "262px",
        fontSize: "34px",
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        backgroundColor: "#333333",
        borderRadius: "50px",
        marginRight: "-50%",
        transform: "translate(-50%,-50%)",
        color: "#FFFFFF",
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
    },
};

const Form = styled.form`
    width: 300px;
    height: 37px;
    display: flex;
    justify-content: space-between;
`;
const Confirm = styled.button`
    width: 134px;
    height: 37px;
    border: none;
    font-size: 18px;
    font-weight: bold;
    color: #1877f2;
    background: #ffffff;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Delete = styled.button`
    width: 134px;
    height: 37px;
    border: none;
    font-size: 18px;
    font-weight: bold;
    color: #1877f2;
    background: #ffffff;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
`;