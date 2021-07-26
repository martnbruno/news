// 18. Crear componente ListadoNoticias. Recibe el state global de noticias de App.
// 19. Importar Noticia y mapear el arreglo de noticias traido de la API para mostrar cada una. Cada noticia tiene que tener un key unico que la identifica. En el arreglo traido de la API el elemento que cumple esa funcion es la url de cada noticia.

import Noticia from "./Noticia";
import PropTypes from "prop-types";

const ListadoNoticias = ({ noticias }) => {
  return (
    <div className="row">
      {noticias.map((noticia) => (
        <Noticia key={noticia.url} noticia={noticia} />
      ))}
    </div>
  );
};

ListadoNoticias.propTypes = {
  noticias: PropTypes.array.isRequired,
};

export default ListadoNoticias;
