import {createGenerateClassName, StylesProvider} from "@material-ui/core";
import React, { lazy,Suspense } from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Header from "./components/Header";
import {Progress} from "./components/progress";

const generateClassName = createGenerateClassName({
    productionPrefix: 'co',
});

const MarketingLazy = lazy(() => import('./components/marketingApp'));
const AuthLazy = lazy(() => import('./components/authApp'));

export const App = () => {
    return (
        <StylesProvider generateClassName={generateClassName}>
            <BrowserRouter>
                <div>
                    <Header />
                    <Suspense fallback={<Progress />}>
                        <Switch>
                            <Route path="/auth" component={AuthLazy} />
                            <Route path="/" component={MarketingLazy} />
                        </Switch>
                    </Suspense>
                </div>
            </BrowserRouter>
        </StylesProvider>
    )
}
