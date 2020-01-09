import React from "react"
import {Link} from "react-router-dom"

export default function Header() {
    return (
        <div>
            <h1>News API react app</h1>
            <h3>Powered by <a href="https://newsapi.org">News API</a></h3>
            <Link to="/">Home</Link>
            <Link to="/top-arabic-news">Top Arabic News</Link>
            <Link to="/top-bbc-news">Top BBC News</Link>
        </div>
    )
}