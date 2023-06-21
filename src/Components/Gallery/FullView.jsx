import ReactDOM from "react-dom";
const modal = document.getElementById("galeria");
import nextArrow from "Assets/Icons/nextArrow.svg";
import prevArrow from "Assets/Icons/prevArrow.svg";
import {PrevButton, NextButton, Close, Modal} from "./ViewElements";
import x from "Assets/Icons/close.svg"
import {useEffect} from "react";


export const FullView = ({action, arr, slide, next, prev}) => {

    return ReactDOM.createPortal(
        <Modal>
        <PrevButton onClick={()=>prev(arr)}>
            <img src={prevArrow} alt=""/>
        </PrevButton>
        <Close onClick={action}>
            <img src={x} alt="close button"/>
        </Close>
        <img src={arr[slide]} alt={`galleria_${slide}`}/>
        <NextButton onClick={()=>next(arr)}>
            <img src={nextArrow} alt=""/>
           </NextButton>
    </Modal>, modal)
}

