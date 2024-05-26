import { createContext } from "react";
import products from "../constants/products";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const contextValue = {
        products
    };
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
