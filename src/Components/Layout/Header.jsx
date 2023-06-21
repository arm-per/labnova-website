import "Styles/header.scss";
import logo from "Assets/logo.svg";
import {Link} from "react-router-dom";
import phoneIcon from "Assets/Icons/phone.svg";
import {DesktopMenu} from "Components/Layout/DesktopMenu";

export const Header = () => {
    return (
        <>
            <header className="main-header">
                <nav className="container">
                    <Link className="main-header__logo-url" to="/">
                        <img className="main-header__logo-img" src={logo}
                             alt="Logotipo Laboratorio de análisis clínicos NOVA"/>
                    </Link>
                    <a className="main-header__emergency" href="tel:6181753034">
                        <img src={phoneIcon} alt="Phone"/>
                        <span>Línea para hospitales</span>
                    </a>
                </nav>
            </header>
            <DesktopMenu/>
        </>
    )
}
