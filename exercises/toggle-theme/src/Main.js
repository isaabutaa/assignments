import React from "react"

import {ThemeContextConsumer} from "./ThemeProvider"

function Main() {
    return (
        <ThemeContextConsumer>
            {({theme, toggleTheme}) => (
                <main className={`${theme}-main main`}>
                    <h1>Click the button to toggle the {theme === "light" ? "Light" : "Dark"} Theme</h1>
                    <button onClick={toggleTheme} className={`${theme}-button`}>Switch Theme</button>
                </main>
            )}
        </ThemeContextConsumer>
    )
}

export default Main