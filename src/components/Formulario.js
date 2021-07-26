// 5. Crear Formulario
// 6. Crear Formulario.module.css e importar en donde corresponda cada clase. Para combinar modules con clases usar template strings.
// 8. Importar useSelect. El state que retorna es una categoria seleccionada de noticias y la interfaz SelectNoticias. Incluir SelectNoticias despues del h2.
// 9. Definir el arreglo OPCIONES que es argumento de useSelect.
// 10. Definir el useState de useSelect con las noticias de la sección 'general' y las demas OPCIONES subsidiariamente.
// 14. Extraer funcion de App que actualiza el state global (guardarCategoria).
// 15. Crear funcion onSubmit del form. Cuando el usuario de submit al form se ejecuta buscarNoticias que actualiza el state global de App con categoria que es el state de useSelect que almacena lo seleccionado por el usuario. La funcion no requiere validacion porque por default siempre trae noticias.
import styles from "./Formulario.module.css";
import useSelect from "../hooks/useSelect";
import PropTypes from "prop-types";

const Formulario = ({ guardarCategoria }) => {
  const OPCIONES = [
    { value: "general", label: "General" },
    { value: "business", label: "Negocios" },
    { value: "entertainment", label: "Entretenimiento" },
    { value: "health", label: "Salud" },
    { value: "science", label: "Ciencia" },
    { value: "sports", label: "Deportes" },
    { value: "technology", label: "Tecnología" },
  ];

  const [categoria, SelectNoticias] = useSelect("general", OPCIONES);

  const buscarNoticias = (e) => {
    e.preventDefault();
    guardarCategoria(categoria);
  };

  return (
    <div className={`row ${styles.buscador}`}>
      <div className="col s12 m8 offset-m2">
        <form onSubmit={buscarNoticias}>
          <h2 className={styles.heading}>Encuentra Noticias por Categoría</h2>
          <SelectNoticias />
          <div className="input-field cols12">
            <input
              type="submit"
              className={`${styles.btn_block} btn-large amber darken-2`}
              value="Buscar"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

Formulario.propTypes = {
  guardarCategoria: PropTypes.func.isRequired,
};

export default Formulario;
