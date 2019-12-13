import React from "react"
import Pet from "./Pet"



function Friend(props) {
    const petComponents = props.friend.pets.map(animal => <Pet key={animal.name} pet={animal}/>)
    return(
        <div className="friend">
            <h2>{props.friend.name}</h2>
            <h3>{props.friend.name}'s pets:</h3>
            {petComponents} 
        </div>
    )
}


export default Friend