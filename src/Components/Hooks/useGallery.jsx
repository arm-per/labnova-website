import {useState} from "react";

export const useGallery = () => {

    const [element, setElement] = useState([]);
    const [visible, setVisible] = useState(false)

    const handleView = () => setVisible(!visible)

    const changePicture = (picture) => {
        setElement(picture)
        handleView()
    }


    return {
        element, changePicture, visible, handleView
    }
}
