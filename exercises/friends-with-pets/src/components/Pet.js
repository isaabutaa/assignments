import React from "react"

function Pet(props) {
    return (
        <div className="pet">
            <ul>
                <li><h4>{props.pet.name}</h4>, who is a {props.pet.breed}</li>
            </ul>
            <img src={props.pet.imgUrl} alt="pet"/>
        </div>
    )
}

export default Pet