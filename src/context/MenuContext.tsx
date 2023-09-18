'use client';

import React, {createContext, useState} from "react";

interface T {
    toggle: () => void,
    mode: boolean
}

// createContext 함수에 초기값을 제공
export const MenuContext: React.Context<T> = createContext<T>({
    toggle: () => {
    },
    mode: false,
});

export const MenuProvider = ({children}: { children: React.ReactNode }) => {
    const [mode, setMode] = useState<boolean>(false);

    const toggle = () => {
        setMode(!mode);
    };

    return (
        <MenuContext.Provider value={{toggle, mode}}>
            {children}
        </MenuContext.Provider>
    );
};
