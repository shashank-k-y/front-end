import React, { Fragment } from 'react';
import {Link, withRouter} from "react-router-dom"
import {signout, isAuthenticated} from "../auth/helper"

const currentTab = (history, path) => {
    if ( history.location.pathname === path) {
        return{color:"#2ecc72"}
    } else {
        return {color:"#ffffff"}
    }
}

 const Menu = ({history, path}) => {
    return (
        <div className="container-flex ">
            <ul className= "nav nav-tabs bg-dark justify-content-centre">
                <li className="nav-item">
                    <Link style={currentTab(history, "/")}
                        className="nav-link" to="/">HOME   <i class="fa fa-home " aria-hidden="true"></i></Link>
                </li>
                {isAuthenticated()&&(
                    <li className="nav-item">
                        <Link style={currentTab(history, "/cart")}
                            className="nav-link" to="/cart">Cart<i class="fa fa-shopping-cart" aria-hidden="true"></i></Link>
                    </li>
                )}
                { isAuthenticated() && (
                    <li className="nav-item">
                        <Link style={currentTab(history, "/user/dashboard")}
                            className="nav-link" to="/user/dashboard">DashBoard</Link>
                    </li>
                )}
               {! isAuthenticated() &&(
                   <Fragment>
                        <li className="nav-item">
                            <Link style={currentTab(history, "/signup")}
                                className="nav-link" to="/signup">Signup <i class="fa fa-user-plus" aria-hidden="true"></i></Link>
                        </li>
                        <li className="nav-item">
                            <Link style={currentTab(history, "/signin")}
                                className="nav-link" to="/signin">Signin <i class="fa fa-sign-in" aria-hidden="true"></i></Link>
                        </li>
                   </Fragment>
               )}
                {isAuthenticated() &&(
                    <li className="nav-item">
                        <span
                            onClick={() => {
                                signout(() => {
                                    history.push("/")
                                })
                            }}
                            className="nav-link text-white">Signout <i class="fa fa-sign-out" aria-hidden="true"></i>
                   </span>
                    </li>
                )}
    
            </ul>
        </div>
    )
}  
export default withRouter(Menu);