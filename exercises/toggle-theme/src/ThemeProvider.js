import React, {Component} from "react"

const {Provider, Consumer} = React.createContext()

class ThemeContextProvider extends Component {
    state = {
        theme: "dark"
    }

    toggleTheme = () => {
        this.setState(prevState => ({theme: prevState.theme === "light" ? "dark" : "light"}))
    }

    render() {
        return (
            <Provider value={{theme: this.state.theme, toggleTheme: this.toggleTheme}}>
                {this.props.children}
            </Provider>
        )
    }
}

export {ThemeContextProvider, Consumer as ThemeContextConsumer}