import {GalleryInfo} from "Components/Gallery/GalleryInfo";
import {GalleryProfile} from "Components/Gallery/GalleryProfile";
import {galleryArray} from "../../Data/GalleryData";
import profile from "Assets/profile_img.jpg"
import {useGallery} from "Components/Hooks/useGallery";
import {FullView} from "Components/Gallery/FullView";
import {useSlideshow} from "Components/Hooks/useSlideshow";
import {ImagesLayout, MainAdjust} from "./GalleryStyles"
import {useEffect} from "react";

export const GalleryLayout = () => {
    useEffect(()=> {
        window.scrollTo({top: 0})
    }, [])
    const {element, visible, handleView} = useGallery();
    const {slide, nextSlide, previousSlide, slideHandler} = useSlideshow();

    return (
        <MainAdjust>
            <GalleryProfile image={profile}>
                <GalleryInfo
                    youtube={"https://www.youtube.com/channel/UCp9wwNw9sUZSTp9JPfteTFw"}
                    facebook={"https://www.facebook.com/labnovamx"}
                    instagram={"https://www.instagram.com/laboratorionovamx/"}
                    name={"Laboratorio Nova"}>
                    <p>En nuestro laboratorio contamos con una amplia variedad de exámenes que
                        son analizados e interpretados por talento humano especializado.</p>
                </GalleryInfo>
            </GalleryProfile>
            <ImagesLayout>
                {
                    galleryArray.map((imagen, index) => {
                        return <img
                            className="galleryImage animation-to-top images"
                            style={{"animationDelay": `${index * .10}s`}}
                            src={imagen}
                            key={index}
                            onClick={() =>{
                                slideHandler(index)
                                handleView()
                            }}
                            alt={imagen}
                            loading={"lazy"}/>
                    })
                }
            </ImagesLayout>
            {
                visible && <FullView
                    element={element}
                    action={handleView}
                    arr={galleryArray}
                    slide={slide}
                    next={nextSlide}
                    prev={previousSlide}
                />
            }
        </MainAdjust>

    )
}
