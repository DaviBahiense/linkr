import { useContext } from "react";
import UserContext from "../context/UserContext";

export default function useUser(){
    return useContext(UserContext)
}