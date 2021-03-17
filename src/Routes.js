import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Privateroutes from "./auth/helper/Privateroutes";
import Cart from "./core/Cart";

import Home from "./core/Home";
import Signin from "./user/signin";
import Signup from "./user/signup";
import UserDashBoard from "./user/UserDashBoard";



const Routes = () => {
    return(
        <BrowserRouter>
        <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/signup" exact component={Signup}/>
        <Route path="/signin" exact component={Signin}/>
        <Route path="/cart" exact component={Cart} />
        <Privateroutes path="/user/dashboard" exact component={UserDashBoard} />
        </Switch>
        </BrowserRouter>

    );
};

export default Routes;

