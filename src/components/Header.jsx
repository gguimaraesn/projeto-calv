import { useState } from 'react'
import '../App.css'

function Header() {
  const [count, setCount] = useState(0)

  return (
    <>
    <header style={{backgroundColor:'green', width:"100%"}}> Header </header>

    </>
  )
}

export default Header