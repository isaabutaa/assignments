import React from "react"

function UglyThings(props) {
    return (
        <div>
            <h3>{props.uglyThing.title}</h3>
            <p> {props.uglyThing.description} </p>
            <img src={props.uglyThing.imgUrl} alt="" />
        </div>
    )
}

export default UglyThings