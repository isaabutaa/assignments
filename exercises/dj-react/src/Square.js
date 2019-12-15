import React from "react"

function Square(props) {
    // const squareColor = {
    //     color: props.color.color
    // }
        return (
            <div className="square" style={{backgroundColor: props.color}}></div>
        )
}


export default Square