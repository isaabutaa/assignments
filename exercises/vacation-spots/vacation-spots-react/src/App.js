import React from "react"
import Spot from "./Spot"
import vacationSpots from "./VacationSpots"
import "./styles.css"
import Header from "./Header"

function App() {
    const spots = vacationSpots.map(place => <Spot key={place.id} spot={place}/>)
    return(
        <div>
            <Header />
            {spots}
        </div>
    )
}

export default App