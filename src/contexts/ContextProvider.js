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
    const [isClicked, setIsClicked] = useState(initialState);
    const [screenSize, setScreenSize] = useState(undefined);

    const handleClick = (clicked) => {
        // vu que isclicked est un objet on doit faire une copie de l'objet et ensuite on change la valeur de l'objet cliquer
        setIsClicked({ ...initialState, [clicked]: true });
    };
    return (
        <StateContext.Provider
            value={{
                activeMenu,
                setActiveMenu,
                isClicked,
                setIsClicked,
                handleClick,
                screenSize,
                setScreenSize,
            }}>
            {/* tous ce que l'on passe a value tous le monde pourra y avoir accès */}
            {children}
        </StateContext.Provider>
    );
};
export const useStateContext = () => useContext(StateContext);
