import "./project.css";
export default function Project({ project }) {
  return <div className="proyect">
    <img src={project.image} alt={project.name} className="proyect__image"/>
    <div className="proyect__info">
        <div className="proyect__info-title">{project.name}</div>
        <div className="proyect__info-subtitle">{project.ubication}</div>
    </div>
  </div>;
}
