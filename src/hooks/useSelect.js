// 7. Crear custom hook useSelect.
// a. Recibe de Formulario un stateInicial y opciones (porque es un select).
// b. Retorna su propio useState con un state actual y la funcion que lo actualiza, y comienza con un state inicial(todas las variables se definen en Formulario).
// c. SelectNoticias es el elemento que se muestra en la interfaz. Retorna un state (lo que el usuario seleccione y SelectNoticias)
// 11. Mapear las opciones para iterar todas las que existen y se muestren en la vista como opciones del select.
// 12. Agregar un evento onChange en select para que actualice el state de useSelect según la opcion seleccionada por el usuario.

import { useState } from "react";

const useSelect = (stateInicial, opciones) => {
  const [state, actualizarState] = useState(stateInicial);

  const SelectNoticias = () => (
    <select
      className="browser-default"
      value={state}
      onChange={(e) => actualizarState(e.target.value)}
    >
      {opciones.map((opcion) => (
        <option key={opcion.value} value={opcion.value}>
          {opcion.label}
        </option>
      ))}
    </select>
  );

  return [state, SelectNoticias];
};

export default useSelect;
