import { useState } from 'react'
import '../App.css'

function Footer() {
  const [count, setCount] = useState(0)

  return (
    <>
    <footer style={{backgroundColor:'yellow'}}>    <div>
        <h1>logo cal.v</h1>
        <p>Seja um instrutor</p>
        <p>Quem somos</p>
        <p>Termos de uso</p>



      </div>
      </footer>
  
    </>
  )
}

export default Footer