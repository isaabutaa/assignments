import React from "react"
import Square from "./Square"
import Header from "./Header"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            colors: [{id: 1,color: "white"},{id: 2,color: "white"},{id: 3,color: "white"},{id: 4,color: "white"}]
        }
        this.handleClick = this.handleClick.bind(this)
        this.topTwoClick = this.topTwoClick.bind(this)
        this.bottomLeftClick = this.bottomLeftClick.bind(this)
        this.bottomRightClick = this.bottomRightClick.bind(this)
    }

    // handleClick() {
    //     this.setState(prevState => {
    //         prevState.colors.map(color => color.color === "white" ? {...color, color: "black"} : {...color, color: "white"})
    //     })
    // }

    handleClick() {
        for(let i = 0; i < this.state.colors.length; i++) {
            if(this.state.colors[i].color === "white") {
                this.setState(prevState => {
                    const colors = prevState.colors.map(color => {
                        return {
                            id: color.id,
                            color: "#FF6EFF"
                        }
                    })
                    return {colors}
                })
            } else {
                this.setState(prevState => {
                    const colors = prevState.colors.map(color => {
                        return {
                            id: color.id,
                            color: "white"
                        }
                    })
                    return {colors}
                })
            }
        }
    }

    topTwoClick() {
        this.setState(prevState => {
            const colors = prevState.colors.map(color => {
                if(prevState.colors.indexOf(color) === 0) {
                    return {
                        id: color.id,
                        color: "#50BFE6"
                    }
                } else if(prevState.colors.indexOf(color) === 1) {
                    return {
                        id: color.id,
                        color: "#50BFE6"
                    }
                } else {
                    return color
                }
            })
            return {colors}
        })
    }

    bottomLeftClick() {
        this.setState(prevState => {
            const colors = prevState.colors.map(color => {
                if(prevState.colors.indexOf(color) === 2) {
                    return {
                        id: color.id,
                        color: "#66FF66"
                    }
                } else {
                    return color
                }
            })
            return {colors}
        })
    }

    bottomRightClick() {
        this.setState(prevState => {
            const colors = prevState.colors.map(color => {
                if(prevState.colors.indexOf(color) === 3) {
                    return {
                        id: color.id,
                        color: "#FFFF66"
                    }
                } else {
                    return color
                }
            })
            return {colors}
        })
    }

    render() {
        const coloredSquares = this.state.colors.map(color => <Square key={color.id} color={color.color}/>)
        return (
            <div>
                <Header />
                <div className="flex-container">
                    <div className="squares-container">
                        {coloredSquares}
                    </div>
                </div>
                <div className="buttons-container">
                    <button onClick={this.handleClick}>Change all the squares</button>
                    <button onClick={this.topTwoClick}>Change top two squares</button>
                    <button onClick={this.bottomLeftClick}>Change bottom left square</button>
                    <button onClick={this.bottomRightClick}>Change bottom right square</button>
                </div>
            </div>
        )
    }
}

export default App