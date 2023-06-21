import {useState} from "react";

export const useSlideshow = () => {
    const [slide, setSlide] = useState(0);

    const nextSlide = (slides) => {
        if(slides.length -1 === slide)
            return setSlide(0)

       return setSlide(slide + 1);
    }

    const previousSlide = (slides) => {
        if(slide === 0)
            return setSlide(slides.length - 1)

        return setSlide(slide - 1)
    }

    const slideHandler = (index) => {
        setSlide(index)
    }

    return {
        slide, nextSlide, previousSlide, slideHandler
    }
}
