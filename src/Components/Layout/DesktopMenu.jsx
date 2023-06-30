import { NavLink } from 'react-router-dom'

export const DesktopMenu = () => {
  return <nav className="desktop-menu">
        <div className="container main-menu">
            <NavLink to="/Servicios">Servicios</NavLink>
            <a href="http://novadurango.dyndns.org:8083/resultados/" rel={'prefetch noreferrer'} target={'_blank'}>Resultados en Línea</a>
            <a href="https://cotizador.labnova.com.mx" target="_blank" rel="prefetch noreferrer">Cotizador</a>
            <NavLink to="/Contacto">Contacto</NavLink>
            <NavLink to="/Podcast">Podcast</NavLink>
            <NavLink to="/Galeria">Galería</NavLink>
        </div>
    </nav>
}
