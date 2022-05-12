import {createGenerateClassName, StylesProvider} from "@material-ui/core";
import React from 'react';
import {BrowserRouter} from "react-router-dom";
import Header from "./components/Header";
import {MarketingApp} from "./components/marketingApp";

const generateClassName = createGenerateClassName({
    productionPrefix: 'co',
});

export const App = () => {
    return (
        <StylesProvider generateClassName={generateClassName}>
            <BrowserRouter>
                <div>
                    <Header />
                    <MarketingApp />
                </div>
            </BrowserRouter>
        </StylesProvider>
    )
}
