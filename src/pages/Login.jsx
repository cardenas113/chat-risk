import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/")
    } catch (err) {
      setErr(true);
    }
  };
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Risk&Chat</span>
        <span className="title">Bienvenido </span>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Ingresa tu correo" />
          <input type="password" placeholder="Ingresa tu contraseña" />
          <button>Inicia Sesion </button>
          {err && <span>Algo salio mal intenta de nuevo</span>}
        </form>
        <p>¿No tienes una cuenta? <Link to="/register">Registrate</Link></p>
      </div>
    </div>
  );
};

export default Login;