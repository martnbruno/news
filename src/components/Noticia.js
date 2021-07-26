// 20. Crear el componente Noticia que es retornado por ListadoNoticias luego de aplicar map sobre el arreglo traido desde la API.
// 22. Extraer los datos de la API que tienen que mostrarse en la vista e e incluirlos en el componente.
// 23. Crear ternario para que evalue si la noticia tiene una imagen o no, si la tiene que muestre el elemento pero si no la tiene que no muestre nada.

import PropTypes from 'prop-types'

const Noticia = ({ noticia }) => {
  const { urlToImage, url, title, description, source } = noticia;

  const imagen = urlToImage ? (
    <div className="card-image">
      <img src={urlToImage} alt={title} />
      <span className={source.name}></span>
    </div>
  ) : null;

  return (
    <div className="col s12 m6 l4">
      <div className="card">
        {imagen}
        <div className="card-content">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <div className="card-action">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="waves-effect waves-ligth btn"
          >
            Ver Noticia Completa
          </a>
        </div>
      </div>
    </div>
  );
};

Noticia.propTypes = {
    noticia: PropTypes.object.isRequired,
  }

export default Noticia;
