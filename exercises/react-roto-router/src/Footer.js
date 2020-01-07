import React from "react"
import {Link, Switch, Route} from "react-router-dom"

function Contact() {
    return (
        <div>
            <h1>This is the contact page.</h1>
        </div>
    )
}

export default function Footer() {
    return (
        <div>
            <footer className="footer">
                <Link className="footer-link" to="/contact">Contact</Link>
            </footer>
            <Switch>
                <Route path="/contact">
                    <Contact />
                </Route>
            </Switch>
        </div>
    )
}