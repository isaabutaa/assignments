import React, {Component} from "react"

class App extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            names: ["Harry Potter", "Hermione Granger", "Ron Weasley", "Severus Snape"]
        }
    }

    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({ [name]: value })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const fullName = `${this.state.firstName} ${this.state.lastName}`

        this.setState(prevState => ({
            firstName: "",
            lastName: "",
            names: [...prevState.names, fullName]
        }))
    }

    render() {
        const listOfNames = this.state.names.map(name => <li>{name}</li>)
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input 
                    type="text" 
                    name="firstName" 
                    value={this.state.firstName} 
                    placeholder="First Name" 
                    onChange={this.handleChange}
                    />
                    <input 
                    type="text" 
                    name="lastName" 
                    value={this.state.lastName} 
                    placeholder="Last Name" 
                    onChange={this.handleChange}
                    />
                    <button type="submit">Submit</button>
                    <h1>{this.state.firstName} {this.state.lastName}</h1>
                </form>
                <ol>
                    {listOfNames}
                </ol>
            </div>
        )
    }
}

export default App