import propTypes, {element} from "prop-types";
import "Styles/cardone.scss";

export const CardOneLayout = ({children}) => {
    return <div className="card-one__layout">
        {
            children
        }
    </div>
}

CardOneLayout.propTypes = {
    children: propTypes.arrayOf(element),
}
