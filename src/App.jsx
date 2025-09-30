import React from 'react'
import Background from './assets/components/Background'
import Forebg from './assets/components/Forebg'

const App = () => {
  const data = [
    {heading:"kaam",disc: "kia hal ha ap ha meow", filesize:"0.6mb"}
  ]
  return (
  <>
    <Background/>
    <Forebg />
    </>
  )
}

export default App 