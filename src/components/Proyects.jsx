import Project from "./project";
import "./projects.css";

export default function Proyectos({ Proyects }) {
  return (
    <section className="projects" id="proyectos">
      <h2 className="projects__title">Proyectos</h2>
      <div className="proyectos__container">
        {Proyects.map((proyecto) => (
          <Project project={proyecto} key={proyecto.id} />
        ))}
      </div>
    </section>
  );
}
