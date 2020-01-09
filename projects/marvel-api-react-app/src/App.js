import React from "react"
import {Switch, Route} from "react-router-dom"

import Header from "./Header"
import HomePage from "./HomePage"
import ListCharacters from "./ListCharacters"
import Footer from "./Footer"

export default function App() {
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route path="/list-characters">
                    <ListCharacters />
                </Route>
            </Switch>
            <Footer />
        </div>
    )
}