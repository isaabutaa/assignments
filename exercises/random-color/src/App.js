import React from "react"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            randomColor: '',
            colors: []
        }
    }

    componentDidMount() {
        fetch("http://www.colr.org/json/color/random")
            .then(response => response.json())
            .then(data => this.setState({randomColor: `#${data.colors[0].hex}`}))
    }

    handleClick = () => {
        fetch("http://www.colr.org/json/color/random")
            .then(response => response.json())
            .then(data => this.setState({randomColor: `#${data.colors[0].hex}`}))
    }

    

    render() {
        // const coloredCircles = this.state.colors.map(color => <div key={color} className="circle" style={{backgroundColor: color}}></div>)
        return (
            <div className="container">
                <div className="circle" style={{backgroundColor: this.state.randomColor}}></div>
                <button onClick={this.handleClick}>Click me!!!</button>
            </div>
        )
    }

}

export default App