// DO NOT DELETE
import React, { useEffect, useState } from "react"
import BreedsSelect from "./BreedsSelect"
export const DogListContainer = () => {
    const [breeds, setBreeds] = useState([])
    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/list/all")
            .then(res => res.json())
            .then(mes => {
                const list = Object.keys(mes.message)
                setBreeds(list)
                console.log("test")
            })

    }, []
    )
    return (
        <BreedsSelect breeds={breeds} />
    )

}
export default DogListContainer;
