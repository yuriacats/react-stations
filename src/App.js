// DO NOT DELETE

import React, { useState } from 'react'
import './App.css'

/**
 * 
 *@type {React.FC}
 */
export const App = () => {
  const [dog, setDog] = useState("https://images.dog.ceo/breeds/dingo/n02115641_4677.jpg")
  const changeDog = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(res => res.json())
      .then((result) => setDog(result.message))
  }
  return (
    <div>
      <header className='base'>
        <h1>yuriacats's AppLinks</h1>
        <button onClick={changeDog} >更新！！</button>
        <p>犬の画像が今は表示されています。</p>
        <img src={dog} />
      </header>
    </div>
  )
}
