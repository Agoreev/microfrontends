import {createGenerateClassName, StylesProvider} from "@material-ui/core";
import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import SignIn from "./components/Signin";
import SignUp from "./components/Signup";

const generateClassName = createGenerateClassName({
    productionPrefix: 'au',
});

export const App = ({ history }) => {
    return <div>
        <StylesProvider generateClassName={generateClassName}>
            <Router history={history}>
                <Switch>
                    <Route exact path='/auth/sign-in' component={SignIn} />
                    <Route exact path='/auth/sign-up' component={SignUp} />
                </Switch>
            </Router>
        </StylesProvider>
    </div>;
};
