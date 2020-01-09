import React from "react"
import {Link} from "react-router-dom"


export default function Navbar() {
    return (
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/list-characters">List of Marvel Characters</Link>
            </nav>
        </div>
    )
}