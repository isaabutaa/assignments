import React, {Component} from "react"

import {CuteThingConsumer} from "./CuteThingContext"
import CuteThing from "./CuteThing"

class Form extends Component {
    state = {
        title: "",
        imgUrl: "",
        description: ""
    }

    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({ [name]: value })
    }

    render() {
        return (
            <CuteThingConsumer>
                {({cuteThings, addCuteThing}) => (
                    <div>
                        <form 
                            onSubmit={(e) => {
                                e.preventDefault()
                                addCuteThing(this.state)
                            }}
                            className="cute-form"
                        >
                            <input onChange={this.handleChange} type="text" name="title" value={this.state.title} placeholder="title"/>
                            <br />
                            <input onChange={this.handleChange} type="text" name="imgUrl" value={this.state.imgUrl} placeholder="image URL"/>
                            <br />
                            <input onChange={this.handleChange} type="text" name="description" value={this.state.description} placeholder="description"/>
                            <br />
                            <button>Submit</button>
                        </form>
                        {cuteThings.map(item => <CuteThing key={item.title} cuteThing={item} />)}
                    </div>
                )}
            </CuteThingConsumer>
        )
    }
}

export default Form