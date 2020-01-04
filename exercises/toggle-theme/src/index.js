import React from "react"
import ReactDOM from "react-dom"

import App from "./App"
import "./styles.css"
import {ThemeContextProvider} from "./ThemeProvider"

ReactDOM.render(
    <ThemeContextProvider>
        <App />
    </ThemeContextProvider>, 
    document.getElementById("root")
)