import styled from "styled-components";

export const Modal = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #555e;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  img{
    max-width: 70vw;
  }
`

export const Close = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #DB0817;
  position: absolute;
  right: 20px;
  top: 20px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transform: scale(1);
  transition: background-color .3s, transform .3s;
  &:hover{
    background-color: #E23945;
    transition: background-color .3s;
  }
  &:active{
    transform: scale(.95);
    transition: transform .3s;
  }
`

export const NextButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 60px;
  border-radius: 0 30px 30px 0;
  background-color: #91C01B;
  border: none;
  transform: scale(1);
  transition: background-coolor .3s, transform .3s;
  cursor: pointer;
  img {
    width: 25px;
    height: 25px;
  }
  &:hover{
    background-color: #A7CD49;
    transition: background-coolor .3s;
  }
  &:active {
    transform: scale(.95);
    transition: transform .3s;
  }
`

export const PrevButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 60px;
  border-radius: 30px 0 0 30px;
  background-color: #91C01B;
  border: none;
  transform: scale(1);
  transition: background-coolor .3s, transform .3s;
  cursor: pointer;
  img {
    width: 25px;
    height: 25px;
  }
  &:hover{
    background-color: #A7CD49;
    transition: background-coolor .3s;
  }
  &:active {
    transform: scale(.95);
    transition: transform .3s;
  }
`
