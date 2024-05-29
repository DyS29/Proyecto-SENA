import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main class="container">
        <h1> Inicio de sesion </h1>
        <form action="http://localhost:3000/" method="post">
          <input type="number" name="celular" id="" placeholder="N. Celular" />
          <input type="password" name="contraseña" id="" placeholder="Contraseña" />
          <button>Ingresar</button>
        </form>
        {/* olvido su contraseña */}

        <h1>Registro</h1>
        <div>
          <form action="http://localhost:3000/registro" method="post">
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
