import React, {Component} from "react"

const {Provider, Consumer} = React.createContext()

class CuteThingProvider extends Component {
    state = {
        cuteThings: []
    }

    addCuteThing = (cuteThing) => {
        this.setState(prevState => ({cuteThings: prevState.cuteThings.concat(cuteThing)}))
    }

    removeCuteThing = (title) => {
        this.setState(prevState => ({cuteThings: prevState.cuteThings.filter(item => item.title !== title)}))
    }

    render() {
        return (
            <Provider value={{cuteThings: this.state.cuteThings, addCuteThing: this.addCuteThing, removeCuteThing: this.removeCuteThing}}>
                {this.props.children}
            </Provider>
        )
    }
}

export {CuteThingProvider, Consumer as CuteThingConsumer}