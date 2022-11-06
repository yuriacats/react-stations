// DO NOT DELETE
import React, { useEffect, useState } from "react"
import DogImage from "./DogImage"

export const BreedsSelect = (props) => {
    const [selectedBreed, setSelectedBreed] = useState('affenpinscher')
    const [dogImages, setDogImages] = useState([""])
    const SelectBreed = (e) => {
        const targetValue = e.target.value;
        setSelectedBreed(targetValue);
    }
    useEffect(() => {
        console.log(dogImages)

    }
        , [dogImages])
    const huga = () => {
        const url = "https://dog.ceo/api/breed/" + selectedBreed + "/images/random/12"
        fetch(url)
            .then(res => res.json())
            .then(mes => setDogImages(mes.message))
    }
    return (
        <div>
            <select
                name="breed"
                value={selectedBreed}
                onChange={SelectBreed}
            >
                {props.breeds.map(breed => (
                    <option
                        key={breed}
                        value={breed}
                    >{breed}</option>
                ))}
            </select>
            <button onClick={huga}>表示</button><br />
            {dogImages.map((url) =>
                <DogImage url={url} />
            )
            }
        </div>
    )
}

export default BreedsSelect;
