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

    editCuteThing = (title, updatedThing) => {
        this.setState(prevState => ({cuteThings: prevState.cuteThings.filter(item => {
            if(item.title === title) {
                return {
                    updatedThing
                }
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