import {createGenerateClassName, StylesProvider} from "@material-ui/core";
import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Pricing from "./components/Pricing";
import Landing from './components/Landing';

const generateClassName = createGenerateClassName({
    productionPrefix: 'ma',
});

export const App = () => {
    return <div>
        <StylesProvider generateClassName={generateClassName}>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/pricing" component={Pricing} />
                    <Route exact path="/" component={Landing} />
                </Switch>
            </BrowserRouter>
        </StylesProvider>
    </div>;
};
