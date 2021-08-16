import { useState } from 'react';

const initialState = {
    darkMode:
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches,
    facebook: 0,
    youtube: 0,
    instagram: 0,
    load: false,
};

export const useDarkMode = () => {
    const [state, setState] = useState(initialState);

    const toggleDarkMode = () => {
        console.log({ ...state });
        setState({
            ...state,
            darkMode: !state.darkMode,
        });
    };

    const updateSocialMedia = (name, value) => {
        setState((prevState) => ({ ...prevState, [name]: value }));
    };

    return {
        state,
        toggleDarkMode,
        updateSocialMedia,
    };
};
