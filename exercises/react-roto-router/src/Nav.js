import React from "react"
import {Link, Switch, Route} from "react-router-dom"

import Home from "./Home"
import About from "./About"
import Services from "./Services"

export default function Nav() {
    return (
        <div className="nav-container">
            <nav className="navbar">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/services">Services</Link>
            </nav>
            <main>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/services">
                        <Services />
                    </Route>
                </Switch>
            </main>
        </div>
    )
}