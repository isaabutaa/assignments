import React from "react"

function Navbar() {
    return(
        <div className="nav-container">
            <a className="start-bootstrap" href="./src/public/index.html">Start Bootstrap</a>
            <nav>
                <a href="./src/public/index.html">Home</a>
                <a href="./src/public/index.html">About</a>
                <a href="./src/public/index.html">Sample Post</a>
                <a href="./src/public/index.html">Contact</a>
            </nav>
        </div>
    )
}

export default Navbar