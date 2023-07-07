import styled from "styled-components";
import {Link} from "react-router-dom";
import video from "./../Assets/video.mp4";

export const Layout = styled.main`
  display: grid;
  grid-template-columns: repeat(4,1fr);
  grid-template-areas: 
          "a a a a"
          "b b b b"
          "c c d d"
          "e f g h"
          "i i i i"
          "j j j j"
          "k k k k";
  gap: 8px;
  margin-block: 10px;
  @media (min-width: 720px){
    &{
      grid-template-columns: repeat(8, 1fr);
      grid-template-areas:
        "a a a a a a a a"
        "c c c c d d d d"
        "b b b b i i i i"
        "e f g h i i i i"
        "j j j j j j j j";
    }
  }
  @media (min-width: 1024px){
    &{
      grid-template-columns: repeat(12, 1fr);
      grid-template-areas:
      "a a a a a a a a i i i i"
      "a a a a a a a a i i i i"
      "a a a a a a a a i i i i"
      "a a a a a a a a j j j j"
      "e f c c d d b b j j j j"
      "g h c c d d b b j j j j" ;
    }
  }
`

export const ContactoIndex = styled(Link)`
  display: block;
  background-image: url("${props => props.image}");
  background-size: cover;
  background-position: center;
  aspect-ratio: 3/1;
  grid-area: k;
  border-radius: min(20px, 5vw);
  overflow: hidden;
  text-decoration: none;
  
  @media (min-width: 720px){
    ${props => props.onlyMobile ? "display: none": null}
  }
  
  & h2{
    display: block;
    width: 100%;
    height: 100%;
    background-color: #2B2B2B55;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    //backdrop-filter: grayscale(.5);
  }
`

const MainBanner = styled.div`
  display: block;
  text-decoration: none;
  width: 100%;
  aspect-ratio: 16/9;
  background-image: url("${props => props.image}");
  background-size: cover;
  border-radius: min(20px, 5vw);
  grid-area: a;
  background-position: center;
  overflow: hidden;
  
  img{
    display: block;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`

export const Banner = ({image}) => {
    return <MainBanner>
        <img src={image} alt="Nueva ubicación en torre v1" />
    </MainBanner>
}

export const PodcastIndex = styled(Link)`
  display: block;
  text-decoration: none;
  width: 100%;
  color: white;
  aspect-ratio: 3/1;
  background-image: url("${props => props.imagen}");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: left;
  border-radius: min(20px, 5vw);
  grid-area: b;
  overflow: hidden;
  position: relative;
  @media(min-width: 720px){
    aspect-ratio: 2/1;
    font-size: 140%;
  }
  @media (min-width: 1024px){
    aspect-ratio: 1/1;
    font-size: 85%;
  }
`

export const PodcastView = styled.div`
  background-image: linear-gradient(to left, #0063AD 70%, transparent);
  height: 100%;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-flow: column;
  padding-block: 15px;
  padding-right: 15px;
  box-sizing: border-box;
  padding-left: 35%;
  h2{
    margin-block: 0;
  }
  span{
    font-size: 13px;
  }
  em{
    font-size: 14px;
    font-weight: bold;
    color: #91C01B;
    font-style: normal;
  }
  img{
    position: absolute;
    width: 40px;
    height: 40px;
    left: calc(15% - 20px);
    top: calc(50% - 20px);
  }
  @media (min-width: 720px){
    &{
      background-image: linear-gradient(to left, #0063AD 50%, transparent);
    }
  }
  @media (min-width: 1024px){
    &{
      background-image: linear-gradient(to top, #0063AD 50%, transparent);
      padding-left: 15px;
      justify-content: flex-end;
      img{
        left: calc(50% - 20px);
        top: 20px;
      }
    }
  }
`

export const EstudioIndex = styled.a`
  display: block;
  text-decoration: none;
  width: 100%;
  color: white;
  aspect-ratio: 1/1;
  background-image: url("${props => props.imagen}");
  background-size: cover;
  background-position: center;
  background-color: orange;
  border-radius: min(20px, 5vw);
  grid-area: c;
  overflow: hidden;
  @media (min-width: 720px){
    &{
      aspect-ratio: 2/1;
      font-size: 140%;
    }
    
  }
  @media (min-width: 1024px){
    &{
      aspect-ratio: 1/1;
      font-size: 100%;
    }
  }
`

export const ResultadosIndex = styled.a`
  display: block;
  text-decoration: none;
  width: 100%;
  color: white;
  aspect-ratio: 1/1;
  background-image: url("${props => props.imagen}");
  background-size: 130%;
  background-position: center bottom ;
  background-color: brown;
  border-radius: min(20px, 5vw);
  grid-area: d;
  overflow: hidden;
  @media(min-width: 720px){
    &{
      aspect-ratio: 2/1;
      font-size: 140%;
    }
    
  }
  @media (min-width: 1024px){
    &{
      aspect-ratio: 1/1;
      font-size: 100%;
    }
  }
`

export const ResultadosView = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(to top, #DB0817, transparent);
  padding: 15px;
  flex-flow: column;
  justify-content: flex-end;
  box-sizing: border-box;
  h3{
    margin-block: 0;
  }
  span{
    display: flex;
    align-items: center;
    font-size: 14px;
    img{
      width: 18px;
      height: 18px;
    }
  }
`

export const SocialMediaIndex = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: white;
  background-color: ${props => props.bgcolor};
  aspect-ratio: 1/1;
  width: 100%;
  height: 100%;
  border-radius: min(20px, 5vw);
  grid-area: ${props => props.area};
  img{
    width: 35px;
    height: 35px;
  }
`

export const ServiciosIndex = styled(Link)`
  display: block;
  background-image: url("${props => props.image}");
  color: white;
  aspect-ratio: 3/1;
  background-color: deeppink;
  width: 100%;
  border-radius: min(20px, 5vw);
  background-position: left;
  background-size: contain;
  background-repeat: no-repeat;
  overflow: hidden;
  text-decoration: none;
  grid-area: i;
  @media(min-width: 720px){
    &{
      aspect-ratio: unset;
      height: 100%;
      background-size: cover;
    }
  }
  @media (min-width: 1024px){
    &{
      aspect-ratio: unset;
      height: 100%;
      background-size: cover;
    }
  }
`
export const GaleriaIndex = styled(Link)`
  display: block;
  background-image: url("${props => props.image}");
  color: white;
  aspect-ratio: 3/1;
  background-color: deeppink;
  width: 100%;
  border-radius: min(20px, 5vw);
  background-position: left;
  background-size: contain;
  background-repeat: no-repeat;
  overflow: hidden;
  text-decoration: none;
  grid-area: j;
  @media (min-width: 720px){
    &{
      aspect-ratio: 4/1;
    }
  }
  @media (min-width: 1024px){
    &{
      aspect-ratio: unset;
      height: 100%;
      background-size: cover;
    }
  }
`

export const ServiciosView = styled.div`
  background-image: linear-gradient(to left, #0063AD 65%, transparent);
  height: 100%;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-flow: column;
  padding-block: 15px;
  padding-right: 15px;
  box-sizing: border-box;
  padding-left: 40%;
  h2{
    margin-block: 0;
    font-size: 18px;
  }
  span{
    font-size: 13px;
  }
  em{
    font-size: 14px;
    font-weight: bold;
    color: #91C01B;
    font-style: normal;
  }
  @media(min-width: 720px){
    &{
      background-image: linear-gradient(to left, #0063AD 40%, transparent);
      h2, span, em{
        font-size: 140%;
      }
    }
  }
  @media (min-width: 1024px){
    background-image: linear-gradient(to top, #0063AD 20%, transparent);
    padding-left: 15px;
    justify-content: flex-end;
  }
`

export const GaleriaView = styled.div`
  background-image: linear-gradient(to left, #83AD18 65%, transparent);
  height: 100%;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-flow: column;
  padding-block: 15px;
  padding-right: 15px;
  box-sizing: border-box;
  padding-left: 40%;
  h2{
    margin-block: 0;
    font-size: 18px;
  }
  span{
    font-size: 13px;
  }
  em{
    font-size: 10px;
    font-weight: bold;
    color: white;
    font-style: normal;
    background-color: #004F8A;
    display: inline-block;
    padding: 4px;
  }
  @media (min-width: 720px){
    &{
      h2, span{
        font-size: 140%;
      }
      em{
        font-size: 120%;
      }
    }
  }
  @media (min-width: 1024px){
    &{
      background-image: linear-gradient(to top, #83AD18 20%, transparent);
      padding-left: 15px;
      justify-content: flex-end;
    }
  }
`



