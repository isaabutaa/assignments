import React, {Component} from "react"

const {Provider, Consumer} = React.createContext()

class CuteThingProvider extends Component {
    state = {
        title: "",
        description: "",
        imgUrl: "",
        cuteThings: []
    }

    addCuteThing = (cuteThing) => {
        this.setState(prevState => ({cuteThings: prevState.cuteThings.concat(cuteThing)}))
    }

    removeCuteThing = (title) => {
        this.setState(prevState => ({cuteThings: prevState.cuteThings.filter(item => item.title !== title)}))
    }

    editCuteThing = (title) => {
        this.setState(prevState => ({cuteThings: prevState.cuteThings.map(item => {
            if(item.title === title) {
                return (
                    <div>
                        <input type="text" name="title" value={this.state.title} placeholder="new title" onChange={this.handleChange} />
                        <input type="text" name="description" value={this.state.description} placeholder="new description" onChange={this.handleChange} />
                        <input type="text" name="imgUrl" value={this.state.imgUrl} placeholder="new imgUrl" onChange={this.handleChange} />
                        <button>Edit item</button>
                    </div>
                )
            }
            return item
        })}))
    }

    render() {
        return (
            <Provider value={{
                        cuteThings: this.state.cuteThings, 
                        addCuteThing: this.addCuteThing, 
                        removeCuteThing: this.removeCuteThing,
                        editCuteThing: this.editCuteThing
                        }}>
                {this.props.children}
            </Provider>
        )
    }
}

export {CuteThingProvider, Consumer as CuteThingConsumer}