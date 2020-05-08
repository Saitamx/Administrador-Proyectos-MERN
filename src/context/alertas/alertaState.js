import React, { useReducer } from "react";
import alertaReducer from "./alertaReducer";
import alertaContext from "./alertaContext";

import {
    MOSTRAR_ALERTA,
    OCULTAR_ALERTA
  } from "../../types";

  const AlertaState = props => {
    const initialState = {
        alerta : null
    }

    const [state, dispatch] = useReducer(alertaReducer, initialState);

    // funciones
    const mostrarAlerta = (msg, categoria) => {
        dispatch({
            type: MOSTRAR_ALERTA,
            payload: {
                msg, // ojo puede ser msg : msg,
                categoria
            }
        });

        //  despues de un tiempo determinado, limpiar la alerta de error
        setTimeout(() => {
            dispatch({
                type: OCULTAR_ALERTA
            })
        }, 7000);
    }

    return (
        <alertaContext.Provider
            value={{
                alerta : state.alerta,
                mostrarAlerta
            }}
        >
            {props.children}
        </alertaContext.Provider>
        )
  }

  export default AlertaState;