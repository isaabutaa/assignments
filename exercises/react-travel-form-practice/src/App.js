import React, {Component} from "react"

/**
 * Challenge: Wire up the partially-finished travel form so that it works!
 * Remember to use the concept of controlled forms
 * https://reactjs.org/docs/forms.html
 * 
 * All information should be populating the text below the form in real-time
 * as you're filling it out
 * 
 * This exercise is adapted from the V School curriculum on vanilla JS forms:
 * https://coursework.vschool.io/travel-form/
 * 
 * All of our challenges and learning resources are open for the public
 * to play around with and learn from at https://coursework.vschool.io
 */

class App extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            age: "", 
            gender: "",
            destination: "",
            isVegan: false,
            isDairyFree: false,
            hasTreeNutAllergy: false,
            isPescatarian: false
        }
    }
    
    handleChange = (event) => {
        const{name, type, value, checked} = event.target
        type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value})
    }
    
    render() {

        let dietPreference = ""
        if(this.state.isVegan) {
            dietPreference.concat("Vegan")
        } else if(this.state.isDairyFree) {
            dietPreference.concat("Dairy Free")
        } else if(this.state.hasTreeNutAllergy) {
            dietPreference.concat("Tree-nut allergy")
        } else {
            dietPreference.concat("Pescatarian")
        }

        return (
            <main>
                <form>
                    <input 
                        type="text"
                        name="firstName" 
                        value={this.state.firstName} 
                        placeholder="First Name" 
                        onChange={this.handleChange}
                    />
                    <br />
                    <input 
                        type="text"
                        name="lastName" 
                        value={this.state.lastName} 
                        placeholder="Last Name" 
                        onChange={this.handleChange}
                    />
                    <br />
                    <input 
                        type="text"
                        name="age" 
                        value={this.state.age} 
                        placeholder="Age" 
                        onChange={this.handleChange}
                    />
                    <br />
                    
                    <br />
                    <p>Gender:</p>
                    <label>
                        <input 
                            type="radio" 
                            name="gender" 
                            value="male"
                            onChange={this.handleChange}
                        />
                        Male
                    </label>
                    <label>
                        <input 
                            type="radio" 
                            name="gender" 
                            value="female"
                            onChange={this.handleChange}
                        />
                        Female
                    </label>
                    <label>
                        <input 
                            type="radio" 
                            name="gender" 
                            value="other"
                            onChange={this.handleChange}
                        />
                        Other
                    </label>
                    
                    <br />
                    <p>Destination:</p>
                    <select value={this.state.destination} name="destination" onChange={this.handleChange}>
                        <option>Please choose a destination</option>
                        <option value="scotland">Scotland</option>
                        <option value="sweden">Sweden</option>
                        <option value="australia">Australia</option>
                        <option value="singapore">Singapore</option>
                        <option value="malaysia">Malaysia</option>
                    </select>
                    
                    <br />
                    <p>Diet Preferences:</p>
                    <label>
                        <input 
                            type="checkbox" 
                            name="isVegan"
                            checked={this.state.isVegan}
                            onChange={this.handleChange}
                        />
                        Vegan
                    </label>
                    <br />
                    <label>
                        <input 
                            type="checkbox" 
                            name="isDairyFree"
                            checked={this.state.isDairyFree}
                            onChange={this.handleChange}
                        />
                        Dairy-free
                    </label>
                    <br />
                    <label>
                        <input 
                            type="checkbox" 
                            name="hasTreeNutAllergy"
                            checked={this.state.hasTreeNutAllergy}
                            onChange={this.handleChange}
                        />
                        Tree-nut allergy
                    </label>
                    <br />
                    <label>
                        <input 
                            type="checkbox" 
                            name="isPescatarian"
                            checked={this.state.isPescatarian}
                            onChange={this.handleChange}
                        />
                        Pescatarian
                    </label>
                    <br />
                    <br />
                    <button>Submit</button>
                </form>
                <hr />
                <h2>Entered information:</h2>
                <p>Your name: {this.state.firstName} {this.state.lastName}</p>
                <p>Your age: {this.state.age}</p>
                <p>Your gender: {this.state.gender}</p>
                <p>Your destination: {this.state.destination}</p>
                <p>Your dietary restrictions: </p>
                <p style={!this.state.isVegan ? {display: "none"} : {display: "block"}}>Vegan</p>
                <p style={!this.state.isDairyFree ? {display: "none"} : {display: "block"}}>Dairy-free</p>
                <p style={!this.state.hasTreeNutAllergy ? {display: "none"} : {display: "block"}}>Tree-nut allergy</p>
                <p style={!this.state.isPescatarian ? {display: "none"} : {display: "block"}}>Pescatarian</p>
            </main>
        )
    }
}

export default App 