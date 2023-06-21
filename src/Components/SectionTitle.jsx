import propTypes from "prop-types";

export const SectionTitle = ({children}) => <h1 className="section-title">{children}</h1>

SectionTitle.propTypes = {
    children: propTypes.string,
}
