import React, {Component} from "react"

import UglyThings from "./UglyThings"

class Form extends Component {
    state = {
        title: "",
        imgUrl: "",
        description: "", 
        uglyThings: []
    }

    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({ [name]: value })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const uglyThing = {...this.state}
        delete uglyThing.uglyThings
        this.setState(prevState => ({title: "", imgUrl: "", description: "", uglyThings: prevState.uglyThings.concat(uglyThing)}))
    }

    render() {
        const uglyThings = this.state.uglyThings.map(item => <UglyThings key={item.title} uglyThing={item} />)
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} type="text" name="title" value={this.state.title} placeholder="title"/>
                    <input onChange={this.handleChange} type="text" name="imgUrl" value={this.state.imgUrl} placeholder="image URL"/>
                    <input onChange={this.handleChange} type="text" name="description" value={this.state.description} placeholder="description"/>
                    <button type="submit">Submit</button>
                </form>
                <div>
                    {uglyThings}
                </div>
            </div>
        )
    }
}

export default Form