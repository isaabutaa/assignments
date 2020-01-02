import React from "react"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            names: []
        }
    }

    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const name = this.state.firstName + " " + this.state.lastName
        this.setState(prevState => ({
            firstName: "",
            lastName: "",
            names: [...prevState.names, name]
        }))
    }

    render() {
        const nameElements = this.state.names.map((name, i) => <h1 key={name} style={{color: i % 2 === 0 ? "black" : "blue"}}>{name}</h1>)

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text" 
                        name="firstName" 
                        value={this.state.firstName} 
                        placeholder="first name" 
                        onChange={this.handleChange}
                    />
                    <input 
                        type="text" 
                        name="lastName" 
                        value={this.state.lastName} 
                        placeholder="last name" 
                        onChange={this.handleChange}
                    />
                    <button>Submit</button>
                </form>
                <div>
                    {nameElements}
                </div>
            </div>
        )
    }
}

export default App