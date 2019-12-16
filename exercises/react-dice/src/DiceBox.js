import React, {Component} from "react"

class DiceBox extends Component {
    constructor() {
        super()
        this.state = {
            die1: 0,
            die2: 0,
            die3: 0,
            die4: 0,
            die5: 0
        }
        this.randomNum = this.randomNum.bind(this)
    }

    randomNum() {
        this.setState({
                        die1: Math.ceil(Math.random() * 6),
                        die2: Math.ceil(Math.random() * 6),
                        die3: Math.ceil(Math.random() * 6),
                        die4: Math.ceil(Math.random() * 6),
                        die5: Math.ceil(Math.random() * 6)
                    })
    }

    render() {
        return (
            <main>
                <div className="dice-container">
                    <h1 className="die">{this.state.die1}</h1>
                    <h1 className="die">{this.state.die2}</h1>
                    <h1 className="die">{this.state.die3}</h1>
                    <h1 className="die">{this.state.die4}</h1>
                    <h1 className="die">{this.state.die5}</h1>
                </div>
                <button onClick={this.randomNum}>Roll Dice!</button>
            </main>
        )
    }
}

export default DiceBox