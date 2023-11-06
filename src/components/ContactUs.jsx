import "./contactUs.css"

export default function ContactUs({}) {
    return (
        <div className="container" id="contacto">
            <h1>Contactame</h1>
            <form action="">
                <input type="text" placeholder="Nombre" />
                <input type="text" placeholder="Correo" />
                <textarea name="" id="" cols="30" rows="10" placeholder="Mensaje"></textarea>
                <input type="submit" value="Enviar" />
            </form>

        </div>
    );
}