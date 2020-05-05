import React, { useContext } from "react";
import Tarea from "./Tarea";
import proyectoContext from "../../context/proyectos/proyectoContext";

const ListadoTareas = () => {
  // extraer proyectos de state inicial
  const proyectosContext = useContext(proyectoContext);
  const {proyecto, eliminarProyecto} = proyectosContext;

  // Si no hay proyecto seleccionado
  if(!proyecto) return <h2>Selecciona un proyecto</h2>

  // array destructuring para extraer el proyecto actual
  const [proyectoActual] = proyecto;

  const tareasProyecto = [
    { nombre: "Elegir Plataforma", estado: true, key:'1'},
    { nombre: "Elegir Plataformas de pago", estado: false , key:'2'},
    { nombre: "Elegir Hosting", estado: false, key:'3'},
    { nombre: "Elegir Template", estado: true, key:'4'},
  ];

  // Elimina un proyecto
  const onclickEliminar = () => {
    eliminarProyecto(proyectoActual.id);
  }

  return (
    <>
      <h2>Proyecto: {proyectoActual.nombre}</h2>

      <ul className="listado-tareas">
        {tareasProyecto.length === 0 
        ? (<li className="tarea"><p>No hay Tareas</p></li>
        ) : tareasProyecto.map(tarea => (<Tarea key={tarea.key} tarea={tarea} />
            ))
        }
      </ul>      
      <button 
        type="button"
        className="btn btn-eliminar"
        onClick={onclickEliminar}
      >Eliminar Proyecto &times;</button>
    </>
  );
};

export default ListadoTareas;
