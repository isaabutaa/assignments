import React from "react"

import {CuteThingConsumer} from "./CuteThingContext"

function CuteThing(props) {
    return (
        <CuteThingConsumer>
                {({removeCuteThing, editCuteThing}) => (
                <div className="cute-thing">
                    <h3>{props.cuteThing.title}</h3>
                    <p> {props.cuteThing.description} </p>
                    <img src={props.cuteThing.imgUrl} alt="" />
                    <br />
                    <button onClick={() => {editCuteThing(props.cuteThing.title)}}>Edit</button>
                    <button onClick={() => {removeCuteThing(props.cuteThing.title)}}>Delete</button>
                </div>
                )}
        </CuteThingConsumer>
    )
}

export default CuteThing