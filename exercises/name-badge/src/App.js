import React, {Component} from "react"
import NameBadge from "./NameBadge"

class App extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            placeOfBirth: "",
            phoneNumber: "",
            favoriteFood: "",
            aboutUser: "Tell us about yourself...",
            badges: []
        }
    }

    handleChange = (event) => {
        const {name, value} = event.target
        this.setState(({
            [name]: value
        }))
    }

    handleSubmit = (event) => {
        event.preventDefault()
        // const badge = {
        //     name: `${this.state.firstName} ${this.state.lastName}`, 
        //     email: this.state.email, 
        //     placeOfBirth: this.state.placeOfBirth,
        //     phoneNumber: this.state.phoneNumber,
        //     favoriteFood: this.state.favoriteFood,
        //     aboutUser: this.state.aboutUser
        // }

        const badge = {...this.state}
        delete badge.badges

        this.setState(prevState => ({
            firstName: "",
            lastName: "",
            email: "",
            placeOfBirth: "",
            phoneNumber: "",
            favoriteFood: "",
            aboutUser: "Tell us about yourself...",
            badges: [...prevState.badges, badge]
        }))
        console.log(this.state)
    }

    render() {
        const nameBadgeComponents = this.state.badges.map(badge => {
            return <NameBadge 
                        key={badge.firstName}
                        name={`${badge.firstName} ${badge.lastName}`} 
                        email={badge.email} 
                        placeOfBirth={badge.placeOfBirth}
                        phoneNumber={badge.phoneNumber}
                        favoriteFood={badge.favoriteFood}
                        aboutUser={badge.aboutUser}
                    />
        })  

        return (
            <div className="main-container">
                <h2>Welcome to <span>CyberTron</span>. Please fill out your info below:</h2>
                <form onSubmit={this.handleSubmit} className="user-form">
                    <input 
                        type="text" 
                        name="firstName" 
                        required 
                        placeholder="First Name" 
                        value={this.state.firstName} 
                        onChange={this.handleChange}
                    />
                    <input 
                        type="text" 
                        name="lastName" 
                        required 
                        placeholder="Last Name" 
                        value={this.state.lastName} 
                        onChange={this.handleChange}
                    />
                    <input 
                        type="text" 
                        name="email" 
                        required 
                        placeholder="Email" 
                        value={this.state.email} 
                        onChange={this.handleChange}
                    />
                    <input 
                        type="text" 
                        name="placeOfBirth" 
                        required 
                        placeholder="Place of Birth" 
                        value={this.state.placeOfBirth} 
                        onChange={this.handleChange}
                    />
                    <input 
                        type="number" 
                        name="phoneNumber" 
                        required 
                        placeholder="Phone" 
                        value={this.state.phoneNumber} 
                        onChange={this.handleChange}
                    />
                    <input 
                        type="text" 
                        name="favoriteFood" 
                        required 
                        placeholder="Favorite Food" 
                        value={this.state.favoriteFood} 
                        onChange={this.handleChange}
                    />
                    <textarea 
                        type="text" 
                        name="aboutUser" 
                        required 
                        value={this.state.aboutUser} 
                        onChange={this.handleChange}
                    />
                    <button type="submit">Submit</button>
                </form>
                {nameBadgeComponents}
            </div>
        )
    }
}

export default App