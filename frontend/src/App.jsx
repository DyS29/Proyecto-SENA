import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Confetti from 'react-confetti';

function App() {
  const [celular, setCelular] = useState("");
  const [clave, setClave] = useState("");
  const [logueado, setLogueado] = useState(false);
  const [registrarCelular, setRegistrarCelular] = useState("");
  const [registrarClave, setRegistrarClave] = useState("");

  async function ingresar(evento) {
    evento.preventDefault();
    try {
      const respuesta = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ celular, clave }),
      });

      if (respuesta.ok) {
        setLogueado(true);
      } else {
        alert("Error al iniciar sesión");
      }
    } catch (error) {
      console.error('Error:', error);
      alert("Error al iniciar sesión");
    }
  }

  async function registro(evento) {
    evento.preventDefault();
    try {
      const respuesta = await fetch('http://localhost:3000/registro', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ registrarCelular, registrarClave }),
      });

      if (respuesta.ok) {
        setLogueado(true);
      } else {
        alert("Error al registrarse");
      }
    } catch (error) {
      console.error('Error:', error);
      alert("Error al registrarse");
    }
  }

  function cambiarCelular(evento) {
    setCelular(evento.target.value);
  }

  function cambiarClave(evento) {
    setClave(evento.target.value);
  }

  function cambiarRegistrarCelular(evento) {
    setRegistrarCelular(evento.target.value);
  }

  function cambiarRegistrarClave(evento) {
    setRegistrarClave(evento.target.value);
  }

  if (logueado) {
    return <Confetti />;
  }

  return (
    <>
      <main className="container">
        <h1>Inicio de sesión</h1>
        <form onSubmit={ingresar}>
          <input value={celular} type="number" name="celular" placeholder="N. Celular" onChange={cambiarCelular} />
          <input value={clave} type="password" name="contraseña" placeholder="Contraseña" onChange={cambiarClave} />
          <button type="submit">Ingresar</button>
        </form>
        <h1>Registro</h1>
        <div>
          <form onSubmit={registro}>
            <input value={registrarCelular} type="number" name="celular" placeholder="N. Celular" onChange={cambiarRegistrarCelular} />
            <input value={registrarClave} type="password" name="contraseña" placeholder="Contraseña" onChange={cambiarRegistrarClave} />
            <button type="submit">Registrar</button>
          </form>
        </div>
      </main>
    </>
  );
}

export default App;
