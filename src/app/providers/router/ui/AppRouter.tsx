import React, {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import {MainPage} from "Pages/MainPage";
import {AboutPage} from "Pages/AboutPage";
import {routeConfig} from "shared/config/routeConfig/routeConfig";

const AppRouter = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {Object.values(routeConfig).map((route) =>
                    <Route
                        path={route.path}
                        element={route.element}
                        key={route.path}
                    />
                )}
            </Routes>
        </Suspense>
    );
};

export default AppRouter;