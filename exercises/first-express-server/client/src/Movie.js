import React, {useState} from "react"

import AddMovieForm from "./AddMovieForm"

function Movie(props) {
    const {title, genre, _id} = props
    const [editToggle, setEditToggle] = useState(false)

    function handleClick() {
        props.deleteMovie(_id)
    }

    function toggle() {
        setEditToggle(prevToggle => !prevToggle)
    }

    return (
        <div>
            { ! editToggle ? 
                <>
                    <h1>{title}</h1>
                    <h2>{genre}</h2>
                    <button onClick={toggle}>Edit</button>
                    <button onClick={handleClick}>Delete</button>
                </>
            :
                <>
                    <AddMovieForm 
                        title={title} 
                        genre={genre} 
                        _id={_id} 
                        btnText="Submit Edit" 
                        submit={props.editMovie} 
                    /> 
                    <button onClick={toggle}>Close</button>
                </>
            }
        </div>
    )
}

export default Movie