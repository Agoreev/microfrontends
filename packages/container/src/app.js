import {createGenerateClassName, StylesProvider} from "@material-ui/core";
import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {AuthApp} from "./components/authApp";
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
                    <Switch>
                        <Route path="/auth" component={AuthApp} />
                        <Route path="/" component={MarketingApp} />
                    </Switch>
                </div>
            </BrowserRouter>
        </StylesProvider>
    )
}
