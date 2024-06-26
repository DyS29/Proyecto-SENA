import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Confetti from 'react-confetti'
function App() {
  const [celular, setCelular] = useState("")
  const [clave, setClave] = useState("")
  const [logueado, setLogueado] = useState(false)
  const [registrou, setusuarioRegritro] = useState("") //constante registro dos //
  const [claver, setClaveRegritro] = useState("")

  async function ingresar(evento) {
    evento.preventDefault()
    const peticion = await fetch("http://localhost:3000/login?celular=" + celular + "&clave=" + clave)
    setLogueado(true)
  }

  async function resgitro(evento) {
    evento.preventDefault()
    const peticion = await fetch("http://localhost:3000/regitro?celular=" + celular + "&clave=" + clave)
    setLogueado(true)
  }

  function cambiarCelular(evento) {
    setCelular(evento.target.value)
  }
  function cambiarClave(evento) {
    setClave(evento.target.value)
  }

  function usuarioregistro(evento) {
    setusuarioRegritro(evento.target.value)
  }
  function claveregistro(evento) {
    setClaveRegritro(evento.target.value)
  }



  if (logueado) {
    return <Confetti />
  }
  return (
    <>
      <main class="container">
        <h1> Inicio de sesion </h1>
        <form onSubmit={ingresar}>
          <input value={celular} type="number" name="celular" id="" placeholder="N. Celular" onChange={cambiarCelular} />
          <input value={clave} type="password" name="contraseña" id="" placeholder="Contraseña" onChange={cambiarClave} />
          <button>Ingresar</button>
        </form>
        {/* olvido su contraseña */}

        <h1>Registro</h1>
        <div>
          <form onsumit={resgitro}>
            <input value={registrou} type="number" name="celular" id="" placeholder="N. Celular" onChange={usuarioregistro} />
            <input value={claver} type="password" name="contraseña" id="" placeholder="Contraseña" onChange={claveregistro} />
            <button>Registro</button>
          </form>
        </div>
      </main>
    </>
  )
}

export default App
