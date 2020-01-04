import React from "react"

import {ThemeContextConsumer} from "./ThemeProvider"

function Navbar() {
    return (
        <ThemeContextConsumer>
            {({theme}) => (
                <nav className={`${theme}-navbar navbar`}>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </nav>
            )}
        </ThemeContextConsumer>
    )
}

export default Navbar