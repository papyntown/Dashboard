import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
};

export const ContextProvider = ({ children }) => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [state, setState] = useState(initialState);

    return (
        <StateContext.Provider value={{ activeMenu, setActiveMenu }}>
            {/* tous ce que l'on passe a value tous le monde pourra y avoir accès */}
            {children}
        </StateContext.Provider>
    );
};
export const useStateContext = () => useContext(StateContext);
