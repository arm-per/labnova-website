import {NavLink} from "react-router-dom";

export const DesktopMenu = () => {
    return <nav className="desktop-menu">
        <div className="container main-menu">
            <NavLink to="/Servicios">Servicios</NavLink>
            <a href={"http://labnovaeclipse.ddns.net:9090/EclipseWeb/login"} rel={"prefetch"} target={"_blank"}>Resultados en Línea</a>
            <a href="https://cotizador.labnova.com.mx" target="_blank" rel="prefetch">Cotizador</a>
            <NavLink to="/Contacto">Contacto</NavLink>
            <NavLink to="/Podcast">Podcast</NavLink>
            <NavLink to="/Galeria">Galería</NavLink>
        </div>
    </nav>
}
