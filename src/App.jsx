import React from 'react';
import AppProvider from './context/AppContext';
import { Main } from './pages/Main';
import './styles/App.css';

export const App = () => (
    <AppProvider>
        <Main />
    </AppProvider>
);
