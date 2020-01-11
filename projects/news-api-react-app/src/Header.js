import React from "react"
import {Link} from "react-router-dom"

import myFace from "./IMG_2215.png"

export default function Header() {
    return (
        <div>
            <header className="header">
                <img src={myFace} alt="face"/>
                <h1 >Welcome to <span className="block-letter">newSSource</span></h1>
                <h3>Powered by <a href="https://newsapi.org">News API</a></h3>
            </header>
            <nav className="navbar">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/top-egyptian-news">Trending: Egyptian News</Link>
                <Link className="nav-link" to="/top-bbc-news">Trending: BBC News</Link>
            </nav>
        </div>
    )
}