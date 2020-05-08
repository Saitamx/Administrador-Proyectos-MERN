import React, { useContext, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import AuthContext from "../../context/atenticacion/authContext";

// codigo para proteger componentes, reutilizable en cualquier proyecto
const Rutaprivada = ({ component: Component, ...props }) => {
  
  const authContext = useContext(AuthContext);
  const { autenticado, cargando, usuarioAutenticado } = authContext;

  useEffect(() => {
    usuarioAutenticado();
  }, []);

  return (
    <Route
      {...props}
      render={(props) =>
        !autenticado && !cargando ? (
          <Redirect to="/" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default Rutaprivada;