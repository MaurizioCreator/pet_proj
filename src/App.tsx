import React, {Suspense, useContext, useState} from 'react';
import {Link, Route, Routes} from "react-router-dom";
import MainPage from "./Pages/MainPage/MainPage";
import AboutPage from "./Pages/AboutPage/AboutPage";
import {MainPageLazy} from "./Pages/MainPage/MainPage.lazy";
import {AboutPageLazy} from "./Pages/AboutPage/AboutPage.lazy";
import {ThemeContext} from "./theme/ThemeContext";
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames/classNames";



const App = () => {
        const {theme,toggleTheme} = useTheme();
    return (
        <div className={classNames('app',{},[theme] )}>
            <button onClick={toggleTheme}>Toggle</button>
            <Link to={'/'}>Main</Link>
            <Link to={'/about'}>About</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/'} element={<MainPageLazy/>}/>
                    <Route path={'/about'} element={<AboutPageLazy/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;