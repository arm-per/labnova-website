import propTypes from "prop-types";
import "Styles/contact.scss";
import telephone from "Assets/Icons/phone.svg";
import dots from "Assets/Decorations/circles.png"

export const SucursalCard = ({location, address, phone, hours, map}) => {
    return (
        <section className="contact-card-container animation-to-top">
            <div className="contact-map-container grow">
                { map }
            </div>
            <div className="animation-to-top contact-decoration">
                <h2 className="contact-card-title">{location}</h2>
                <p className="contact-address">{address}</p>
                <p className="contact-hours">{hours}</p>
                <a className="contact-call" href={`tel:${phone.split(" ").join("")}`}><img src={telephone} alt={`Sucursal ${location} call`}/>{phone}</a>
                <img className="contact-decoration-dots" src={dots} alt="decoration dots"/>
            </div>
        </section>
    )
}

SucursalCard.propTypes = {
    location: propTypes.string,
    address: propTypes.string,
    phone: propTypes.string,
    hours: propTypes.element,
    map: propTypes.element,
};
