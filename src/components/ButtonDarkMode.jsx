import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import '../styles/ButtonDarkMode.css';

export const ButtonDarkMode = () => {
    const [firstClick, setFirstClick] = useState(false);
    const { toggleDarkMode } = useContext(AppContext);

    return (
        <button
            className={`button-dark-mode ${firstClick ? 'animate' : null}`}
            onClick={() => {
                !firstClick && setFirstClick(true);
                toggleDarkMode();
            }}
        />
    );
};
