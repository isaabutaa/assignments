import React from "react"
import {Link} from "react-router-dom"

export default function Header() {
    return (
        <div>
            <header className="header">
                <h1>News API react app</h1>
                <h3>Powered by <a href="https://newsapi.org">News API</a></h3>
            </header>
            <nav className="navbar">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/top-arabic-news">Trending: Arabic News</Link>
                <Link className="nav-link" to="/top-bbc-news">Trending: BBC News</Link>
            </nav>
        </div>
    )
}