import React from "react"

function NameBadge(props) {
    return (
        <div className="name-badge">
            <header>
                <h3>Name Badge:</h3>
            </header>
            <p>Name: <span>{props.name}</span></p>
            <p>Phone: <span>{props.phoneNumber}</span></p>
            <p>Email: <span>{props.email}</span></p>
            <p>Place of birth: <span>{props.placeOfBirth}</span></p>
            <p>Favorite food: <span>{props.favoriteFood}</span></p>
            <div> {props.aboutUser} </div>
        </div>
    )
}

export default NameBadge