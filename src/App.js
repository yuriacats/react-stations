// DO NOT DELETE

import React, { useState } from 'react'
import './App.css'
import Description from './Description';
import Header from './Header';
/**
 * 
 *@type {React.FC}
 */
export const App = () => {
  return (
    <div>
      <Header />
      <Description />
    </div>
  )
}
