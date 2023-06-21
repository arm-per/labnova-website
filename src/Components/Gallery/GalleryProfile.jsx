import styled from "styled-components";
import propTypes from "prop-types";

const PerfilImage = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-image: url("${props => props.image}");
  background-size: cover;
  background-position: center;

  
  @media (min-width: 700px){
    &{
      width: 150px;
      height: 150px; 
      margin-inline: auto;
    }
  }
`

const HeadLayout = styled.header`
  display: grid;
  gap: 8px;
  margin-block: 20px;
  justify-content: center;
  align-content: center;
  @media (min-width: 700px){
    &{
      grid-template-columns: 1fr 3fr;
      justify-content: flex-start;
      gap: 20px;
    }
  }
`

export const GalleryProfile = ({image, children}) => {
    return (
        <HeadLayout>
            <PerfilImage image={image}/>
            {
                children
            }
        </HeadLayout>
    )
}

GalleryProfile.propTypes = {
    image: propTypes.string,
    children: propTypes.element,
};
