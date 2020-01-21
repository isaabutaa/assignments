import React, {useState} from "react"

function AddMovieForm(props) {
    const initObj = {title: props.title || "", genre: props.genre || ""}
    const [inputs, setInputs] = useState(initObj)

    function handleChange(e) {
        const {name, value} = e.target
        setInputs(prevInputs => ({ ...prevInputs, [name]: value }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        props.submit(inputs, props._id)
        setInputs(initObj)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} type="text" name="title" value={inputs.title} placeholder="title" />
                <input onChange={handleChange} type="text" name="genre" value={inputs.genre} placeholder="genre" />
                <button>{props.btnText}</button>
            </form>
        </div>
    )
}

export default AddMovieForm