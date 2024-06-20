import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Confetti from 'react-confetti'
function App() {
  const [celular, setCelular] = useState("")
  const [clave, setClave] = useState("")
  const [logueado, setLogueado] = useState(false)

  async function ingresar(evento) {
    evento.preventDefault()
    const peticion = await fetch("http://localhost:3000/login?celular=" + celular + "&clave=" + clave)
    setLogueado(true)
  }
  function cambiarCelular(evento) {
    setCelular(evento.target.value)
  }
  function cambiarClave(evento) {
    setClave(evento.target.value)
  }
  if (logueado) {
    return <Confetti />
  }
  return (
    <>
      <main class="container">
        <h1> Inicio de sesion </h1>
        <form onSubmit={ingresar}     >
          <input value={celular} type="number" name="celular" id="" placeholder="N. Celular" onChange={cambiarCelular} />
          <input value={clave} type="password" name="contraseña" id="" placeholder="Contraseña" onChange={cambiarClave} />
          <button>Ingresar</button>
        </form>
        {/* olvido su contraseña */}

        <h1>Registro</h1>
        <div>
          <form >
            <input type="number" name="celular" id="" placeholder="N. Celular" />
            <input type="password" name="contraseña" id="" placeholder="Contraseña" />
            <button>Registro</button>
          </form>
        </div>
      </main>
    </>
  )
}

export default App
