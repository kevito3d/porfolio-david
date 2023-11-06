import NavBar from "./components/NavBar";
import proyectos from "./assets/proyectos.json";
import Proyectos from "./components/Proyects";
import ContactUs from "./components/ContactUs";
import Home from "./Home";
function App() {
  return (
    <>
      <NavBar
        urlImage={
          "https://png.pngtree.com/png-vector/20190909/ourmid/pngtree-outline-user-icon-png-image_1727916.jpg"
        }
      />
      <Home />
      <Proyectos Proyects={proyectos.data} />
      <ContactUs />
    </>
  );
}

export default App;
