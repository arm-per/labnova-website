import styled from "styled-components";

export const ImagesLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  margin-bottom: 40px;
  
  & > img{
    width: 100%;
    aspect-ratio: 1/1;
    object-fit: cover;
    object-position: center;
  }
  
  @media (min-width: 600px){
    &{
      gap: 12px;
    }
  }
  
  @media (min-width: 720px){
    &{
      gap: 20px;
    }
  }
`

export const MainAdjust = styled.main`
  width: 95%;
  max-width: 960px;
  min-width: 300px;
  margin-inline: auto;
`

export const FlexDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  
  h1{
    color: #0063AD;
  }
  
  @media (min-width: 680px){
    &{
      flex-direction: row;
      align-items: center;
    }
  }
`

export const SocialIcon = styled.a`
  display: block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  padding: 6px;
  background-color: white;
  box-sizing: border-box;
  box-shadow: 0 0 10px #0063AD33;
  transform: scale(1);
  transition: box-shadow .3s, transform .3s;
  
  &:hover{
    box-shadow: 0 0 2px #0063AD33;
    transform: scale(.95);
    transition: box-shadow .3s, transform .3s;
  }
  
  img{
    width: 100%;
    height: 100%;
  }
`

export const IconsFlex = styled.div`
  display: flex;
  gap: 12px;
  justify-content: flex-end;
  align-items: center;
`

