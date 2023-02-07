
import { useState } from 'react'
import './App.css'
import ButtonOrganism from './components/ButtonOrganism'

const App = () => {

  const [loading, setLoading] = useState(false)
  const onClick = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1500)
  }

  return (
    <ButtonOrganism 
      backgroundColor="#1E9" 
      textColor="#000" 
      onClick={onClick}
      loading={loading}
      >
      Clique aqui
    </ButtonOrganism>
  )
}

export default App
