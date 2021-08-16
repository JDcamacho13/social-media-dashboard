import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { Header } from '../components/Header';
import { ListOfCards } from '../components/ListOfCards';
import { useSocialMedias } from '../hooks/useSocialMedias';
import { Loading } from '../components/Loading';

export const Main = () => {
    const {
        state: { darkMode, load },
        updateSocialMedia,
    } = useContext(AppContext);

    useSocialMedias(updateSocialMedia);

    if (load) {
        return (
            <div className={`container-app ${darkMode ? 'dark-mode' : null}`}>
                <Header />
                <ListOfCards />
            </div>
        );
    } else {
        return (
            <div className={`container-app ${darkMode ? 'dark-mode' : null}`}>
                <Loading />
            </div>
        );
    }
};
