import { useState } from "react";
import "./Formulario.css";
const Formulario = ({setUser}) => {
  const [nombre, setNombre] = useState("");
  const [contra, setContra] = useState("");
  const [error, setError] = useState(false)

  const handleSubmit = (e)=>{
    e.preventDefault()

    if(nombre=== ""|| contra === ""){
        setError(true)
        return
    }
    setError(false)
    setUser([nombre])
  }

  return (
    <section>
      <h1>Login</h1>
      <form className="formulario" onSubmit={handleSubmit}>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <input
          type="password"
          value={contra}
          onChange={(e) => setContra(e.target.value)}
        />
        <button>Iniciar sesion</button>
      </form>
      {error && <p>Todos los campos son obligatorios</p>}
    </section>
  );
};
export default Formulario;
