import React from 'react';
import '../styles/Header.css';
import { ButtonDarkMode } from './ButtonDarkMode';

export const Header = () => {
    return (
        <header>
            <div className="header-container">
                <div className="title">
                    <h1>Social Media Dashboard</h1>
                </div>
                <div className="dark-mode-button">
                    <p>Dark Mode</p>
                    <ButtonDarkMode />
                </div>
            </div>
        </header>
    );
};
