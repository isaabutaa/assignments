import React, {Component} from "react"

const {Provider, Consumer} = React.createContext()

class UglyThingProvider extends Component {
    state = {
        uglyThings: []
    }

    render() {
        return (
            <Provider value={}>
                {this.props.children}
            </Provider>
        )
    }
}

export {UglyThingProvider, Consumer as UglyThingConsumer}