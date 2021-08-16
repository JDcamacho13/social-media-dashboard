import React, { createContext } from 'react';
import { useDarkMode } from '../hooks/useInitialState';

export const AppContext = createContext();

const AppProvider = ({ children }) => {
    const darkMode = useDarkMode();

    return (
        <AppContext.Provider value={darkMode}>{children}</AppContext.Provider>
    );
};

export default AppProvider;
