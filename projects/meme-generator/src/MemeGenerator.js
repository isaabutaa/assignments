import React, {Component} from "react"

class MemeGenerator extends Component {
    constructor() {
        super()
        this.state = {
            topText: "",
            bottomText: "",
            randomImg: "http://i.imgflip.com/1bij.jpg",
            allMemeImgs: []
        }
    }

    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const {memes} = response.data
                console.log(memes[0])
                this.setState({allMemeImgs: memes})
            })
    }

    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({[name]: value})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const randomIndex = Math.floor(Math.random() * this.state.allMemeImgs.length)
        this.setState({randomImg: this.state.allMemeImgs[randomIndex].url})
    }

    render() {
        return (
            <div className="main-content">
                <form className="meme-form" onSubmit={this.handleSubmit}>
                    <input 
                        type="text" 
                        name="topText" 
                        value={this.state.topText} 
                        placeholder="top text" 
                        onChange={this.handleChange}
                    />
                    <input 
                        type="text" 
                        name="bottomText" 
                        value={this.state.bottomText}  
                        placeholder="bottom text" 
                        onChange={this.handleChange}
                    />
                    <button>Generate Meme</button>
                </form>
                <div className="meme">
                    <img src={this.state.randomImg} alt="meme"/>
                    <h2 className="top-text">{this.state.topText}</h2>
                    <h2 className="bottom-text">{this.state.bottomText}</h2>
                </div>
            </div>
        )
    }
}

export default MemeGenerator