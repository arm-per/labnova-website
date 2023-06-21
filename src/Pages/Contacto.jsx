import {NavLink, Outlet} from "react-router-dom";
import "Styles/contact.scss";
import {SectionTitle} from "Components/SectionTitle";

export const Contacto = () => {
    return (
        <main className="animation-to-top container services">
            <SectionTitle>¿Dónde estamos?</SectionTitle>
            <div className="contact-menu">
                <NavLink to="Matriz">Matriz</NavLink>
                <NavLink to="Plaza-DOMA">Plaza DOMA</NavLink>
                <NavLink to="Punto-Guadiana">Punto Guadiana</NavLink>
                <NavLink to="Victoria">Guadalupe Victoria</NavLink>
            </div>
            <Outlet/>
        </main>

    )
}
