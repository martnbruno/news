// 1. Crear Header
// 2. Pasar prop titulo
// 3. Crear nav
import PropTypes from "prop-types";
const Header = ({ titulo }) => {
  return (
    <div>
      <nav className="nav-wrapper light-blue darken-4">
        <a href="#!" className="brand-logo center">
          {titulo}
        </a>
      </nav>
    </div>
  );
};

Header.propTypes = {
  titulo: PropTypes.string.isRequired,
};

export default Header;
