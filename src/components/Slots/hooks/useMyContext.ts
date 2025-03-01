import { useContext } from "react";
import { MyContext } from "../context/MyContext";

export const useMyContext = () => {
    const context = useContext(MyContext)

    if(!context) {
        throw new Error('useMyContext must be used with a myProvider')
    }
    return context;
}