import React, {Component} from "react"

import {CuteThingConsumer} from "./CuteThingContext"

class CuteThing extends Component {
    state = {
        newTitle: this.props.cuteThing.title,
        newDescription: this.props.cuteThing.description,
        newImgUrl: this.props.cuteThing.imgUrl, 
        toggleInputs: false
    }

    toggleInputs = () => {
        this.setState(prevState => ({toggleInputs: !prevState.toggleInputs}))
    }

    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({ [name]: value })
    }

    render() {
        const updatedThing = {...this.state}
        delete updatedThing.toggleInputs
        console.log("!!!!!", updatedThing)
        return (
            <CuteThingConsumer>
                    {({removeCuteThing, editCuteThing}) => (
                    <div className="cute-thing">
                        <h3>{this.props.cuteThing.title}</h3>
                        <p> {this.props.cuteThing.description} </p>
                        <img src={this.props.cuteThing.imgUrl} alt="" />
                        <br />
                        <form 
                            style={{display: this.state.toggleInputs ? "block" : "none"}}
                            onSubmit={(e) => {
                                e.preventDefault()
                                editCuteThing(this.props.cuteThing.title, updatedThing)
                                }
                            }
                        >
                            <input 
                                type="text" 
                                name="newTitle" 
                                value={this.state.newTitle} 
                                placeholder={this.props.cuteThing.title} 
                                onChange={this.handleChange}   
                            />
                            <br />
                            <input 
                                type="text" 
                                name="newDescription" 
                                value={this.state.newDescription} 
                                placeholder={this.props.cuteThing.description} 
                                onChange={this.handleChange}                             
                            />
                            <br />
                            <input 
                                type="text" 
                                name="newImgUrl" 
                                value={this.state.newImgUrl} 
                                placeholder={this.props.cuteThing.imgUrl} 
                                onChange={this.handleChange}                              
                            />
                            <br />
                            <button>Submit</button>
                        </form>
                        <button onClick={this.toggleInputs}>Edit</button>
                        <button onClick={() => {removeCuteThing(this.props.cuteThing.title)}}>Delete</button>
                    </div>
                    )}
            </CuteThingConsumer>
        )
    }
}

export default CuteThing