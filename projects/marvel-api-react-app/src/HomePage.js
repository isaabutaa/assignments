import React from "react"

export default function HomePage() {
    return (
        <div>
            <h1>Search for your favorite Marvel character from the Marvel API:</h1>
            <form>
                <input type="text" placeholder="Enter character name e.g. Spider-Man"/>
                <button>Search</button>
            </form>
        </div>
    )
}