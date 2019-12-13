import React from "react"
import friends from "./components/FriendsList"
import Friend from "./components/Friend"
import Header from "./components/Header"
import "./styles.css"

function App() {
    const friendComponents = friends.map(person => <Friend key={person.name} friend={person}/>)
    return(
        <div className="main-container">
            <Header />
            {friendComponents}
        </div>
    )
}

export default App