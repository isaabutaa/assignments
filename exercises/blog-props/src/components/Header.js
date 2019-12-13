import React from "react"
import Navbar from "./Navbar"

function Header() {
    return(
        <div className="nav-header">
            <Navbar />
            <div className="header">
                <h1>Clean Blog</h1>
                <h2>A Blog Theme by Start Bootstrap</h2>
            </div>
        </div>
    )
}

export default Header