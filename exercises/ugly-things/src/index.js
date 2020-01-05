import React from "react"
import ReactDOM from "react-dom"

import "./styles.css"
import App from "./App"
import {CuteThingProvider} from "./CuteThingContext"

ReactDOM.render(
    <CuteThingProvider>
        <App />
    </CuteThingProvider>, 
    document.getElementById("root")
)
