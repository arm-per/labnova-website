import propTypes from "prop-types";
import "Styles/cardone.scss";
import essay from "Assets/Icons/essay.svg";
import defaultImage from "Assets/results.jpg";
import deco_circles from "Assets/Decorations/circles.png"


export const CardOne = ({title = "Servicio NOVA", children, icon = essay, image = defaultImage, className}) => {
    return <section className="card-one__container">
        <img className={`card-one__illustration ${className}`} src={image} alt={`${title.split(" ").join("-")}-imagen`}/>
        <div className="card-one__info">
            <header className="card-one__icon">
                <img className="card-one__icon-image" src={icon}
                     alt={`${title.split(" ").join("-")}-icono`}/>
            </header>
            <h2 className="card-one__title">
                {
                    title
                }
            </h2>
            <p className="card-one__description">
                {
                    children
                }
            </p>
        </div>
        <img className="deco_card" src={deco_circles} alt="circle-decoration"/>
    </section>
}

CardOne.propTypes = {
    title: propTypes.string,
    children: propTypes.any,
    icon: propTypes.string
}
