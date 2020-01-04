import React from "react"

import {ThemeContextConsumer} from "./ThemeProvider"

function Footer() {
    return (
        <ThemeContextConsumer>
            {({theme}) => (
                <div className={`${theme}-footer footer`}>
                    <footer>
                        <h2>Footer Stuff</h2>
                    </footer>
                </div>
            )}
        </ThemeContextConsumer>
    )
}

export default Footer