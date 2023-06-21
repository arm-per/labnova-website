import propTypes from "prop-types";
import fb from "Assets/Icons/facebook-circle-fill.svg"
import ig from "Assets/Icons/instagram-fill.svg";
import yt from "Assets/Icons/youtube-fill.svg";
import {FlexDiv, IconsFlex, SocialIcon} from "./GalleryStyles"

export const GalleryInfo = ({name, facebook, instagram, youtube, children}) => {
    return (
        <section>
            <FlexDiv>
                <h1>{name}</h1>
                <IconsFlex>
                    <SocialIcon href={facebook}>
                        <img src={fb} alt="Facebook"/>
                    </SocialIcon>
                    <SocialIcon href={instagram}>
                        <img src={ig} alt="Instagram"/>
                    </SocialIcon>
                    <SocialIcon href={youtube}>
                        <img src={yt} alt="Youtube"/>
                    </SocialIcon>
                </IconsFlex>
            </FlexDiv>
            <article style={{"lineHeight": "140%"}}>
                {
                    children
                }
            </article>
        </section>
    )
};

GalleryInfo.propTypes = {
    name: propTypes.string,
    facebook: propTypes.string,
    instagram: propTypes.string,
    youtube: propTypes.string,
    children: propTypes.element,
};
