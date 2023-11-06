import "./navbar.css";
export default function NavBar({ urlImage }) {
  return (
    <nav className="navbar">
      <img src={urlImage} alt="Logo" className="navbar__brand-logo" />

      <ul>
        <li>
          <a href="#inicio">Inicio</a>
        </li>
        <li>
          <a href="#proyectos"> 
            Proyectos
          </a>
        </li>
        <li>
          <a href="#contruccion">
            Construcciones
          </a>
        </li>
        <li>
          <a href="#contacto">Contacto</a>
        </li>
      </ul>
    </nav>
  );
}
