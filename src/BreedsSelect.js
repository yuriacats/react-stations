// DO NOT DELETE
import React, { useState } from "react"

const BreedsSelect = (props) => {
    const [selectedBreed, setSelectedBreed] = useState('')

    return (
        <div>

            <select
                name="breed"
                onChange={(e) => setSelectedBreed(props.breeds[e.target.selectedIndex])}
            >
                {props.breeds.map(breed => (
                    <option
                        key={breed}
                        value={breed}
                    >{breed}</option>
                ))}
            </select>
            <p>{selectedBreed}</p>
        </div>
    )
}

export default BreedsSelect;
