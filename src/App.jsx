// RAFCE
import ThemeSwap from './components/ThemeSwap'
import React from 'react'
import Counter from './components/Counter'

const App = () => {
  return (
    <div>
      <h1>HELLO WORLD</h1>
      <button className='btn btn-primary'>BUTTON EXAMPLE</button>
      
      <Counter/>
      <ThemeSwap/>
    </div>
  )
}

export default App