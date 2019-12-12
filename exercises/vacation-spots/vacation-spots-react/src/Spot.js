import React from "react"

function Spot(props) {
    return (
        <div className="spot">
            <h2>Destination: {props.spot.place}</h2>
            <h3>Price: ${props.spot.price}</h3>
            <p>Ideal time to travel: {props.spot.timeToGo}</p>
            <img src={props.spot.imgUrl} alt={props.spot.place}/>
        </div>
    )
}

export default Spot